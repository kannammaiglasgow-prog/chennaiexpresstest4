# Chennai Express Backend Phase 1 Starter

This package is for the first backend phase only.

## Included 5 Phase-1 Items

1. Product Database + CSV/Excel Upload Structure
2. Orders Database
3. Admin Order Edit / Status Panel
4. Customer Rewards by WhatsApp Number
5. Stock In/Out Toggle

## Files

- `supabase/schema.sql`  
  Main Supabase database schema.

- `supabase/seed_sample_data.sql`  
  Sample products and rewards.

- `admin/admin.html`  
  Admin dashboard prototype.

- `admin/admin.css`  
  Admin dashboard styling.

- `admin/admin.js`  
  Admin prototype logic.

- `templates/products_upload_template.csv`  
  Product upload template for Excel/CSV.

## How To Use

1. Create a Supabase project.
2. Open Supabase SQL Editor.
3. Run `supabase/schema.sql`.
4. Run `supabase/seed_sample_data.sql`.
5. Upload products using the CSV template.
6. Open `admin/admin.html` locally to view admin prototype.

## Production Note

The admin panel included here is a frontend prototype.  
Next step is connecting it to Supabase using Supabase JS.