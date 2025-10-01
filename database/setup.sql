-- Create the reservations table
CREATE TABLE reservations (
  id BIGSERIAL PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  customer_phone VARCHAR(20),
  date DATE NOT NULL,
  time TIME NOT NULL,
  party_size INTEGER NOT NULL DEFAULT 2,
  special_requests TEXT,
  dishes JSONB DEFAULT '[]'::jsonb,
  total_amount DECIMAL(10,2) DEFAULT 0.00,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create an index on status for faster queries
CREATE INDEX idx_reservations_status ON reservations(status);

-- Create an index on date for faster date-based queries
CREATE INDEX idx_reservations_date ON reservations(date);

-- Create an index on created_at for ordering
CREATE INDEX idx_reservations_created_at ON reservations(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow reading all reservations (for admin)
CREATE POLICY "Allow read access for all users" ON reservations
  FOR SELECT USING (true);

-- Create a policy to allow inserting reservations (for customers)
CREATE POLICY "Allow insert for all users" ON reservations
  FOR INSERT WITH CHECK (true);

-- Create a policy to allow updating reservations (for admin)
CREATE POLICY "Allow update for all users" ON reservations
  FOR UPDATE USING (true);

-- Create a policy to allow deleting reservations (for admin)
CREATE POLICY "Allow delete for all users" ON reservations
  FOR DELETE USING (true);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a trigger to automatically update the updated_at column
CREATE TRIGGER update_reservations_updated_at BEFORE UPDATE ON reservations
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Create a view for admin statistics
CREATE VIEW reservation_stats AS
SELECT 
  COUNT(*) as total_reservations,
  COUNT(*) FILTER (WHERE status = 'pending') as pending_count,
  COUNT(*) FILTER (WHERE status = 'confirmed') as confirmed_count,
  COUNT(*) FILTER (WHERE status = 'completed') as completed_count, 
  COUNT(*) FILTER (WHERE status = 'cancelled') as cancelled_count,
  SUM(total_amount) as total_revenue,
  AVG(party_size) as avg_party_size
FROM reservations;