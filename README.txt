CHENNAI EXPRESS MARKETPLACE - MVP

How to use:
1. Unzip this folder.
2. Open index.html in Chrome or mobile browser.
3. Add products to cart.
4. Open cart and checkout.
5. Click 'Send Order to WhatsApp'.

Current WhatsApp number:
447309736428

Included:
- Mobile home page
- Products
- Cart
- Checkout
- Delivery rules
- WhatsApp checkout
- Product request
- Rewards display
- Out of stock rule

To update products:
Edit products.js or later replace with database/Supabase.

Delivery rules:
- Collection: Free
- Within 5 miles: < £100 = £3, £100+ = free
- 5–10 miles: £10
- 10–20 miles: £200+ = £10, below £200 collection only
- Over 20 miles: collection only


V2 UPDATE:
- Product cards now show selected quantity.
- Add button changes to [-] quantity [+].
- Added item confirmation toast appears.


V3 UPDATE:
- WhatsApp message now comes in a cleaner order format.
- Added order.html preview page.
- When hosted online, WhatsApp message includes an Order Preview Page link.
- Important: preview link works properly after hosting on Netlify/Vercel. Local file preview may not open from WhatsApp.


V4 UPDATE:
- Current visible products have individual local product images.
- Product descriptions added.
- Product card now shows image, description, pack size, price and quantity.
- Full 2,000 products can be added later when final product list is provided.


V5 UPDATE:
- Each current product now has a clearer individual product image.
- Product images include full product name, category, pack size, price and Chennai Express branding.
- These are generated catalog-style images, not original branded packet photos.
- Real product packet images can be added later when available.


V6 UPDATE:
- "Can't find item" no longer asks for WhatsApp number.
- Customer types item name and adds it to the shopping cart.
- Requested items appear in the cart as "Price to be confirmed".
- Requested items are included in the final WhatsApp order message together with normal cart items.
- No separate product request WhatsApp message is sent.


V7 UPDATE:
- Fixed clickable links/buttons.
- Special Offers now opens a proper Offers section.
- Restaurant Food and Grocery promo cards now filter products.
- First Order Offer opens offers section.
- Menu button now opens a quick menu instead of showing an alert.
- Bottom navigation, cart, rewards, request item and WhatsApp checkout remain working.


V8 UPDATE:
- Fixed requested item add-to-cart function.
- Requested item now stays in shopping cart.
- Confirmation message appears under the request box.
- Message asks customer to type another item if needed.


V9 UPDATE:
- Smart search added.
- Search finds exact products first and related products below.
- Example: "puttu" shows puttu plus sambal, coconut sambal, idiyappam.
- Example: "pepper" shows black pepper, crushed pepper, pepper powder, related spices.
- If no result, customer can add search text as requested item.


V10 UPDATE:
- Search results now appear directly under the search bar.
- Product grid no longer repeats the full search list below.
- Special Offers section now shows only discounted products.
- Removed reward/free delivery cards from Special Offers.
- Added example offers: Gingelly Oil 1L £8.99 -> £5.99 and 50 Idiyappam £15 -> £9.99.


V11 UPDATE:
- If search has no product, Add to Cart directly adds the search text as a requested item.
- No need to scroll to the request box.
- Confirmation appears directly under search bar.


V12 UPDATE:
- Created 500x500 PNG image for every current product.
- All product image paths updated in products.js.
- Images are generated catalog-style images with product name, price, pack size and Chennai Express branding.
- These are not original packet photos. Replace later with real supplier/product photos if available.


V13 UPDATE:
- Product image click opens product detail page.
- Product name click opens product detail page.
- Product detail page includes large image, name, price, description, pack, stock, Add to Cart and related items.
- Related item images/names also open their detail pages.


V14 UPDATE:
- Related item image/name click now opens product detail from the top.
- Related item Add button now changes to [-] quantity [+].
- Related item quantity is visible immediately.
- Related item card shows selected state when added.


V15 UPDATE:
- Products already added to cart are hidden from Related Items.
- Products already added to cart are also hidden from search related suggestions.
- This keeps recommendations clean and avoids suggesting the same item again.


V16 UPDATE:
- Related item Add no longer jumps to home/top/product page.
- When adding related item, the same related card stays visible and shows [-] quantity [+].
- Already-added cart items are still hidden from related suggestions except the item just added from that related section.


V17 UPDATE:
- Cart now shows reward points below total/subtotal.
- Customer can claim free items using earned points.
- Claimed reward items appear in the cart as FREE.
- Points used and remaining points are calculated.
- WhatsApp order includes claimed free rewards.


V18 UPDATE:
- Removed View Cart button from product detail page.
- Product detail Add/Plus/Minus now stays at the top of the product page.
- Rewards in cart now clearly show:
  current available points,
  free items claimable now,
  and next rewards with how many more points/spend are needed.
