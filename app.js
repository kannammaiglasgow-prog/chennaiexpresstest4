const WHATSAPP_NUMBER = "447309736428";

const STORE_COLLECTION_INFO = {
  collectionPoint: "203 Willows Lane, Bolton, BL3 4AZ",
  collectionHours: "Tuesday - Sunday: 11:00 AM - 9:00 PM",
  closedDay: "Monday Closed",
  timingNote: "After placing your order, we will confirm your collection or delivery time via WhatsApp."
};

const BANK_TRANSFER_DETAILS = {
  bankName: "000",
  accountName: "000",
  sortCode: "00-00-00",
  accountNumber: "00000000",
  reference: "Use your name as reference"
};

const FIXED_REWARDS = [
  {id:"chicken_roll", points:500, name:"Free Chicken Roll", emoji:"ðŸŒ¯", image:"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22500%22%20height%3D%22500%22%20viewBox%3D%220%200%20500%20500%22%3E%0A%20%20%3Crect%20width%3D%22500%22%20height%3D%22500%22%20rx%3D%2242%22%20fill%3D%22%23fff8eb%22%2F%3E%0A%20%20%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%22436%22%20height%3D%22436%22%20rx%3D%2234%22%20fill%3D%22%23ffffff%22%20stroke%3D%22%23ecd8b8%22%20stroke-width%3D%226%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%22250%22%20cy%3D%22180%22%20r%3D%2270%22%20fill%3D%22%230b7a3b%22%20opacity%3D%22.12%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M177%20252h146l-18%2092H195l-18-92Z%22%20fill%3D%22%230b7a3b%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M205%20252c0-34%2020-62%2045-62s45%2028%2045%2062%22%20fill%3D%22none%22%20stroke%3D%22%23d4141d%22%20stroke-width%3D%2218%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%22250%22%20y%3D%22392%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20Helvetica%2C%20sans-serif%22%20font-size%3D%2234%22%20font-weight%3D%22900%22%20fill%3D%22%23d4141d%22%3ECHENNAI%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%22250%22%20y%3D%22430%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20Helvetica%2C%20sans-serif%22%20font-size%3D%2232%22%20font-weight%3D%22900%22%20fill%3D%22%230b7a3b%22%3EEXPRESS%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%22250%22%20y%3D%22462%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20Helvetica%2C%20sans-serif%22%20font-size%3D%2218%22%20font-weight%3D%22700%22%20fill%3D%22%23555%22%3EFOOD%20%26amp%3B%20GROCERY%3C%2Ftext%3E%0A%3C%2Fsvg%3E%0A"},
  {id:"puttu_1kg", points:1000, name:"Free 1kg Puttu", emoji:"ðŸ¥¥", image:"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22500%22%20height%3D%22500%22%20viewBox%3D%220%200%20500%20500%22%3E%0A%20%20%3Crect%20width%3D%22500%22%20height%3D%22500%22%20rx%3D%2242%22%20fill%3D%22%23fff8eb%22%2F%3E%0A%20%20%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%22436%22%20height%3D%22436%22%20rx%3D%2234%22%20fill%3D%22%23ffffff%22%20stroke%3D%22%23ecd8b8%22%20stroke-width%3D%226%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%22250%22%20cy%3D%22180%22%20r%3D%2270%22%20fill%3D%22%230b7a3b%22%20opacity%3D%22.12%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M177%20252h146l-18%2092H195l-18-92Z%22%20fill%3D%22%230b7a3b%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M205%20252c0-34%2020-62%2045-62s45%2028%2045%2062%22%20fill%3D%22none%22%20stroke%3D%22%23d4141d%22%20stroke-width%3D%2218%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%22250%22%20y%3D%22392%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20Helvetica%2C%20sans-serif%22%20font-size%3D%2234%22%20font-weight%3D%22900%22%20fill%3D%22%23d4141d%22%3ECHENNAI%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%22250%22%20y%3D%22430%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20Helvetica%2C%20sans-serif%22%20font-size%3D%2232%22%20font-weight%3D%22900%22%20fill%3D%22%230b7a3b%22%3EEXPRESS%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%22250%22%20y%3D%22462%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20Helvetica%2C%20sans-serif%22%20font-size%3D%2218%22%20font-weight%3D%22700%22%20fill%3D%22%23555%22%3EFOOD%20%26amp%3B%20GROCERY%3C%2Ftext%3E%0A%3C%2Fsvg%3E%0A"},
  {id:"chicken_biryani", points:2000, name:"Free Chicken Biryani", emoji:"ðŸ›", image:"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22500%22%20height%3D%22500%22%20viewBox%3D%220%200%20500%20500%22%3E%0A%20%20%3Crect%20width%3D%22500%22%20height%3D%22500%22%20rx%3D%2242%22%20fill%3D%22%23fff8eb%22%2F%3E%0A%20%20%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%22436%22%20height%3D%22436%22%20rx%3D%2234%22%20fill%3D%22%23ffffff%22%20stroke%3D%22%23ecd8b8%22%20stroke-width%3D%226%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%22250%22%20cy%3D%22180%22%20r%3D%2270%22%20fill%3D%22%230b7a3b%22%20opacity%3D%22.12%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M177%20252h146l-18%2092H195l-18-92Z%22%20fill%3D%22%230b7a3b%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M205%20252c0-34%2020-62%2045-62s45%2028%2045%2062%22%20fill%3D%22none%22%20stroke%3D%22%23d4141d%22%20stroke-width%3D%2218%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%22250%22%20y%3D%22392%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20Helvetica%2C%20sans-serif%22%20font-size%3D%2234%22%20font-weight%3D%22900%22%20fill%3D%22%23d4141d%22%3ECHENNAI%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%22250%22%20y%3D%22430%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20Helvetica%2C%20sans-serif%22%20font-size%3D%2232%22%20font-weight%3D%22900%22%20fill%3D%22%230b7a3b%22%3EEXPRESS%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%22250%22%20y%3D%22462%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20Helvetica%2C%20sans-serif%22%20font-size%3D%2218%22%20font-weight%3D%22700%22%20fill%3D%22%23555%22%3EFOOD%20%26amp%3B%20GROCERY%3C%2Ftext%3E%0A%3C%2Fsvg%3E%0A"},
  {id:"gingelly_oil", points:3000, name:"Free Gingelly Oil", emoji:"ðŸ›¢ï¸", image:"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22500%22%20height%3D%22500%22%20viewBox%3D%220%200%20500%20500%22%3E%0A%20%20%3Crect%20width%3D%22500%22%20height%3D%22500%22%20rx%3D%2242%22%20fill%3D%22%23fff8eb%22%2F%3E%0A%20%20%3Crect%20x%3D%2232%22%20y%3D%2232%22%20width%3D%22436%22%20height%3D%22436%22%20rx%3D%2234%22%20fill%3D%22%23ffffff%22%20stroke%3D%22%23ecd8b8%22%20stroke-width%3D%226%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%22250%22%20cy%3D%22180%22%20r%3D%2270%22%20fill%3D%22%230b7a3b%22%20opacity%3D%22.12%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M177%20252h146l-18%2092H195l-18-92Z%22%20fill%3D%22%230b7a3b%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M205%20252c0-34%2020-62%2045-62s45%2028%2045%2062%22%20fill%3D%22none%22%20stroke%3D%22%23d4141d%22%20stroke-width%3D%2218%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%3Ctext%20x%3D%22250%22%20y%3D%22392%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20Helvetica%2C%20sans-serif%22%20font-size%3D%2234%22%20font-weight%3D%22900%22%20fill%3D%22%23d4141d%22%3ECHENNAI%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%22250%22%20y%3D%22430%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20Helvetica%2C%20sans-serif%22%20font-size%3D%2232%22%20font-weight%3D%22900%22%20fill%3D%22%230b7a3b%22%3EEXPRESS%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%22250%22%20y%3D%22462%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20Helvetica%2C%20sans-serif%22%20font-size%3D%2218%22%20font-weight%3D%22700%22%20fill%3D%22%23555%22%3EFOOD%20%26amp%3B%20GROCERY%3C%2Ftext%3E%0A%3C%2Fsvg%3E%0A"}
];
let cart = JSON.parse(localStorage.getItem("ce_cart") || "{}");
let checkedDistanceMiles = null;
let checkedPostcode = "";
let requestedCart = JSON.parse(localStorage.getItem("ce_requested_cart") || "[]");
let claimedRewards = JSON.parse(localStorage.getItem("ce_claimed_rewards") || "[]");
const TEXT = {
  restaurant:"Restaurant",
  grocery:"Grocery",
  search:"Search",
  searchPlaceholder:"Search for products...",
  mostOrdered:"Popular Items",
  specialOffers:"Special Offers",
  offersNote:"Only discounted products will appear here.",
  allProducts:"All Products",
  allCategories:"All Categories",
  rewardsShop:"Rewards",
  rewardsText:"Spend £1 and earn 10 points. Redeem free items.",
  cantFind:"Can't find what you need?",
  requestText:"Type the item name and add it to your cart. Price will be confirmed on WhatsApp.",
  requestPlaceholder:"Example: MTR Rava Idli Mix",
  addRequest:"Add Request to Cart",
  yourCart:"Your Cart",
  subtotal:"Subtotal",
  checkout:"Checkout",
  collection:"Collection",
  delivery:"Delivery",
  deliveryInfo:"Delivery Information",
  deliveryNotice:"Delivery charge may apply. We will confirm delivery charge and delivery time via WhatsApp after reviewing your order.",
  collectionInfo:"Collection Information",
  collectionPoint:"Collection Point:",
  collectionHours:"Collection Hours:",
  timingNote:"After placing your order, we will confirm your collection or delivery time via WhatsApp.",
  customerName:"Customer name",
  postcode:"Postcode for delivery e.g. BL3 4AZ",
  whatsappNumber:"Customer WhatsApp number",
  address:"Full delivery address including postcode",
  paymentMethod:"Payment Method",
  cash:"Cash",
  card:"Card",
  bankTransfer:"Bank Transfer",
  notes:"Customer notes optional",
  total:"Total",
  sendWhatsapp:"Send Order to WhatsApp",
  home:"Home",
  products:"Products",
  rewards:"Rewards",
  cart:"Cart",
  add:"Add",
  out:"Out",
  addOffer:"Add Offer",
  addToCart:"Add to Cart",
  outOfStock:"Out of Stock",
  inStock:"In Stock",
  rewardPoints:"Reward Points",
  emptyCart:"Cart is empty.",
  requestedItem:"Requested item - Price to be confirmed",
  mayApply:"May apply",
  deliverySelected:"Delivery selected. Please enter full address and postcode. We will confirm delivery charge via WhatsApp."
};

function tr(key){
  return TEXT[key] || key;
}
document.addEventListener("error", function(event){
  const img = event.target;
  if(!img || img.tagName !== "IMG" || img.dataset.fallbackApplied) return;
  img.dataset.fallbackApplied = "true";
  const fallback = document.createElement("div");
  fallback.className = `${img.className || ""} img-fallback`.trim();
  fallback.setAttribute("role", "img");
  fallback.setAttribute("aria-label", img.alt || "Product image");
  fallback.innerHTML = `<span>${escapeHtmlText(img.alt || "Chennai Express")}</span>`;
  img.replaceWith(fallback);
}, true);

function escapeHtmlText(v){
  return String(v || "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;");
}

function cleanPublicDescription(value){
  return String(value || "")
    .replace(/\s*Price includes 40% profit from invoice cost\./gi, "")
    .trim();
}

function money(v){ return "\u00a3" + Number(v || 0).toFixed(2); }
function save(){ 
  localStorage.setItem("ce_cart", JSON.stringify(cart)); 
  localStorage.setItem("ce_requested_cart", JSON.stringify(requestedCart));
  updateCartCount(); 
}
function priceOf(p){ return p.offer_price || p.price; }
function categories(){ return ["All", ...new Set(PRODUCTS.map(p=>p.category))]; }
function stockLimit(p){
  const qty = Number(p && (p.stock_qty ?? p.units_per_case));
  return Number.isFinite(qty) && qty >= 0 ? qty : Infinity;
}

function stockLabel(p){
  const limit = stockLimit(p);
  if(!Number.isFinite(limit)) return p.stock || "In Stock";
  if(limit <= 0) return "Out of Stock";
  return `${limit} in stock`;
}

function refreshProductsFromAdminStore(){
  loadAdminProductOverrides();
}

function productKey(p){
  return String((p && (p.sku || p.id || p.name)) || "").toLowerCase().trim();
}

function mergeLatestFileProductData(savedProducts){
  if(!Array.isArray(PRODUCTS) || !Array.isArray(savedProducts)) return savedProducts;
  const fileByKey = new Map(PRODUCTS.map(p => [productKey(p), p]).filter(([key]) => key));
  return savedProducts.map(saved => {
    const fileProduct = fileByKey.get(productKey(saved));
    if(!fileProduct) return saved;
    return {
      ...saved,
      image:fileProduct.image || saved.image || "",
      description:cleanPublicDescription(fileProduct.description || saved.description),
      pack:fileProduct.pack || saved.pack || "",
      subcategory:fileProduct.subcategory || saved.subcategory || "",
      units_per_case:fileProduct.units_per_case ?? saved.units_per_case,
      invoice_amount:fileProduct.invoice_amount ?? saved.invoice_amount,
      invoice_qty:fileProduct.invoice_qty ?? saved.invoice_qty
    };
  });
}

function validateCartStock(showAlert = true){
  refreshProductsFromAdminStore();
  const problems = [];
  cartLines().forEach(({p, qty}) => {
    const limit = stockLimit(p);
    if(p.stock !== "In Stock" || limit <= 0){
      problems.push(`${p.name} is out of stock.`);
    }else if(Number.isFinite(limit) && qty > limit){
      problems.push(`${p.name}: only ${limit} available, but cart has ${qty}.`);
      cart[p.id] = limit;
      if(limit <= 0) delete cart[p.id];
    }
  });
  if(problems.length){
    save();
    renderCart();
    renderMostOrdered();
    renderSpecialOffers();
    renderOfferSlider();
    renderProducts();
    renderTopSearchResults();
    if(showAlert) alert("Stock updated:\n\n" + problems.join("\n"));
    return false;
  }
  return true;
}

function saveCurrentProductsToAdminStore(){
  localStorage.setItem("ce_admin_products", JSON.stringify(PRODUCTS));
}

function reduceStockAfterOrder(lines){
  lines.forEach(({p, qty}) => {
    const product = PRODUCTS.find(x => x.id === p.id);
    if(!product) return;
    const limit = stockLimit(product);
    if(!Number.isFinite(limit)) return;
    product.stock_qty = Math.max(0, limit - qty);
    if(product.stock_qty <= 0) product.stock = "Out of Stock";
  });
  saveCurrentProductsToAdminStore();
}

function updatePaymentBox(){
  const box = document.getElementById("bankDetailsBox");
  if(!box) return;
  const selected = document.querySelector("input[name='paymentMethod']:checked");
  const method = selected ? selected.value : "Cash";
  if(method !== "Bank Transfer"){
    box.innerHTML = "";
    box.style.display = "none";
    return;
  }
  box.style.display = "block";
  box.innerHTML = `
    <p><b>Bank:</b> ${escapeHtmlText(BANK_TRANSFER_DETAILS.bankName)}</p>
    <p><b>Name:</b> ${escapeHtmlText(BANK_TRANSFER_DETAILS.accountName)}</p>
    <p><b>Sort Code:</b> ${escapeHtmlText(BANK_TRANSFER_DETAILS.sortCode)}</p>
    <p><b>Account:</b> ${escapeHtmlText(BANK_TRANSFER_DETAILS.accountNumber)}</p>
    <p><b>Reference:</b> ${escapeHtmlText(BANK_TRANSFER_DETAILS.reference)}</p>`;
}

function loadAdminProductOverrides(){
  try{
    const saved = JSON.parse(localStorage.getItem("ce_admin_products") || "null");
    if(Array.isArray(saved) && saved.length && Array.isArray(PRODUCTS)){
      const cleaned = mergeLatestFileProductData(saved).map(p => ({...p, description:cleanPublicDescription(p.description)}));
      PRODUCTS.splice(0, PRODUCTS.length, ...cleaned);
      if(JSON.stringify(cleaned) !== JSON.stringify(saved)){
        localStorage.setItem("ce_admin_products", JSON.stringify(cleaned));
      }
    }
  }catch(e){
    console.warn("Could not load admin product changes", e);
  }
}

function init(){
  loadAdminProductOverrides();
  const catBox = document.getElementById("categoryButtons");
  if(catBox){
    catBox.innerHTML = "";
  }
  const sel = document.getElementById("categoryFilter");
  sel.innerHTML = categories().map(c=>`<option value="${c}">${c}</option>`).join("");
  renderMostOrdered();
  renderSpecialOffers();
  renderOfferSlider();
  renderProducts();
  updateCartCount();
  updatePaymentBox();
}
function iconFor(c){
  if(c.includes("Restaurant")) return "Food";
  if(c.includes("Grocery")) return "Grocery";
  if(c.includes("Household")) return "Home";
  if(c.includes("Pooja")) return "Pooja";
  return "Shop";
}

const SEARCH_RELATIONS = {
  puttu: ["puttu","sambal","coconut","idiyappam","ready to eat","rice flour"],
  pittu: ["puttu","sambal","coconut","idiyappam","ready to eat","rice flour"],
  pepper: ["pepper","black pepper","crushed pepper","pepper powder","cumin","mustard","rasam","masala"],
  milagu: ["pepper","black pepper","crushed pepper","pepper powder","cumin","mustard","rasam","masala"],
  fish: ["fish","fish fry","fish curry","seafood","gingelly oil"],
  chicken: ["chicken","chicken curry","chicken 65","biryani","necto"],
  biryani: ["biryani","necto","pickle","chicken","mutton"],
  lemon: ["lemon","lemon rice","pickle","rice mix"],
  coffee: ["coffee","kappi","chukku","malli","tea"]
};

function normaliseText(v){
  return String(v || "").toLowerCase().replace(/[^a-z0-9 ]+/g," ").replace(/\s+/g," ").trim();
}
function productText(p){
  return normaliseText([p.name,p.category,p.subcategory,p.brand,cleanPublicDescription(p.description),p.pack].join(" "));
}
function searchTermsFor(q){
  const n = normaliseText(q);
  if(!n) return [];
  let terms = [n, ...n.split(" ").filter(Boolean)];
  Object.keys(SEARCH_RELATIONS).forEach(k=>{
    if(n.includes(k)) terms.push(...SEARCH_RELATIONS[k]);
  });
  return [...new Set(terms.map(normaliseText).filter(Boolean))];
}
function smartSearchProducts(query, category){
  const q = normaliseText(query);
  const terms = searchTermsFor(q);
  let rows = PRODUCTS.map(p=>{
    const text = productText(p);
    let score = 0;
    let exact = false;
    if(!q) score = 1;
    if(category !== "All" && p.category === category) score += 2;
    if(q && normaliseText(p.name).includes(q)){ score += 100; exact = true; }
    terms.forEach(t=>{
      if(normaliseText(p.name).includes(t)) score += 40;
      else if(text.includes(t)) score += 14;
    });
    // related boost by category/subcategory
    if(q.includes("puttu") && (p.subcategory.toLowerCase().includes("side") || p.name.toLowerCase().includes("sambal") || p.name.toLowerCase().includes("idiyappam"))) score += 22;
    if(q.includes("pepper") && p.subcategory.toLowerCase().includes("masala")) score += 15;
    return {...p, _score: score, _exact: exact};
  }).filter(p => (category==="All" || p.category===category || q) && p._score > 0);
  rows.sort((a,b)=> b._score - a._score || a.name.localeCompare(b.name));
  return rows;
}


function showRestaurantFood(){
  const sel = document.getElementById("categoryFilter");
  if(sel) sel.value = "Restaurant Food";
  document.getElementById("searchInput").value = "";
  scrollToProducts();
  renderProducts();
}

function showGrocery(){
  const sel = document.getElementById("categoryFilter");
  if(sel) sel.value = "Grocery";
  document.getElementById("searchInput").value = "";
  scrollToProducts();
  renderProducts();
}

function setCategory(c){ 
  const sel = document.getElementById("categoryFilter");
  const values = [...sel.options].map(o=>o.value);
  sel.value = values.includes(c) ? c : "All";
  scrollToProducts(); 
  renderProducts(); 
}
function scrollToProducts(){ document.querySelector(".products-anchor").scrollIntoView({behavior:"smooth"}); }
function scrollToOffers(){ document.getElementById("offersSection").scrollIntoView({behavior:"smooth"}); }
function scrollToRewards(){ document.querySelector(".rewards").scrollIntoView({behavior:"smooth"}); }

function card(p){
  const old = p.offer_price ? `<span class="old">${money(p.price)}</span>` : "";
  const disabled = p.stock !== "In Stock";
  const qty = cart[p.id] || 0;
  const description = cleanPublicDescription(p.description);
  const qtyControl = disabled 
    ? `<button class="add" disabled>${tr("out")}</button>`
    : qty > 0 
      ? `<div class="inline-qty"><button onclick="event.stopPropagation(); changeQty(${p.id},-1)">-</button><b>${qty}</b><button onclick="event.stopPropagation(); addToCart(${p.id})">+</button></div>`
      : `<button class="add" onclick="event.stopPropagation(); addToCart(${p.id})">${tr("add")}</button>`;
  return `<div class="product-card ${disabled?'out':''} ${qty>0?'selected':''}">
    ${p.badge?`<div class="badge">${p.badge}</div>`:""}
    ${qty>0?`<div class="added-pill">${qty}</div>`:""}
    <img class="product-img clickable" src="${p.image}" alt="${p.name}" onclick="openProductPage(${p.id})">
    <div class="name clickable" onclick="openProductPage(${p.id})">${p.name}</div>
    <div class="sub">${description || p.subcategory}</div>
    <div class="pack">${p.subcategory} - ${p.pack}</div>
    <div class="pack">${stockLabel(p)}</div>
    <div class="price-line"><span class="price">${money(priceOf(p))}</span>${old}</div>
    ${qtyControl}
  </div>`;
}

function renderMostOrdered(){
  document.getElementById("mostOrdered").innerHTML = PRODUCTS.slice(0,6).map(card).join("");
}

function offerCard(p){
  const description = cleanPublicDescription(p.description);
  return `<div class="offer-product-card">
    <img src="${p.image}" alt="${p.name}">
    <div>
      <b>${p.name}</b>
      <p>${description}</p>
      <div><span class="was">Was ${money(p.price)}</span> <span class="now">Now ${money(priceOf(p))}</span></div>
      <button onclick="addToCart(${p.id})">${tr("addOffer")}</button>
    </div>
  </div>`;
}


function renderOfferSlider(){
  const box = document.getElementById("offerSlider");
  if(!box) return;
  const offers = PRODUCTS.filter(p => p.offer_price && p.stock === "In Stock");
  if(!offers.length){
    box.innerHTML = `<div class="slide active"><h2>Special Offer</h2><p>New offers coming soon.</p></div>`;
    return;
  }
  box.innerHTML = offers.map((p,i)=>`
    <div class="offer-slide ${i===0?'active':''}">
      <img src="${p.image}" alt="${p.name}">
      <div>
        <p class="tag">SPECIAL OFFER</p>
        <h2>${p.name}</h2>
        <div class="offer-price"><span class="was">Was ${money(p.price)}</span> <span class="now">Now ${money(priceOf(p))}</span></div>
        <button onclick="addToCart(${p.id})">${tr("addOffer")}</button>
      </div>
    </div>
  `).join("");
  let idx = 0;
  clearInterval(window.offerSliderTimer);
  window.offerSliderTimer = setInterval(()=>{
    const slides = document.querySelectorAll(".offer-slide");
    if(!slides.length) return;
    slides[idx].classList.remove("active");
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add("active");
  }, 3000);
}


function renderSpecialOffers(){
  const offers = PRODUCTS.filter(p => p.offer_price && p.stock === "In Stock");
  const box = document.getElementById("specialOffersGrid");
  if(!box) return;
  box.innerHTML = offers.length ? offers.map(offerCard).join("") : "<p>No special product offers today.</p>";
}

function handleSearchInput(){
  renderTopSearchResults();
  renderProducts();
}

function renderTopSearchResults(){
  const rawQ = document.getElementById("searchInput").value.trim();
  const box = document.getElementById("searchResultsTop");
  if(!box) return;
  if(!rawQ){
    box.innerHTML = "";
    box.classList.remove("show");
    return;
  }
  const items = smartSearchProducts(rawQ, "All").slice(0,10);
  if(!items.length){
    box.innerHTML = `<div class="top-no-result">
      <b>No item found for "${rawQ}"</b>
      <p>You can add this as a requested item to your cart.</p>
      <button onclick="addSearchTextToRequestedCart()">${tr("addToCart")}</button>
    </div>`;
    box.classList.add("show");
    return;
  }
  const exact = items.filter(p=>p._exact);
  const related = items.filter(p=>!p._exact && !cart[p.id]);
  box.innerHTML = `
    ${exact.length ? `<h3>Search result</h3>${exact.map(searchResultRow).join("")}` : ""}
    ${related.length ? `<h3>Related items</h3>${related.slice(0,6).map(searchResultRow).join("")}` : ""}
  `;
  box.classList.add("show");
}

function searchResultRow(p){
  const qty = cart[p.id] || 0;
  return `<div class="search-result-row">
    <img class="clickable" src="${p.image}" alt="${p.name}" onclick="openProductPage(${p.id})">
    <div><b class="clickable" onclick="openProductPage(${p.id})">${p.name}</b><br><small>${p.subcategory} - ${p.pack}</small><br><span>${money(priceOf(p))}</span></div>
    ${qty>0 ? `<div class="mini-qty"><button onclick="changeQty(${p.id},-1)">-</button><b>${qty}</b><button onclick="addToCart(${p.id})">+</button></div>` : `<button onclick="addToCart(${p.id})">${tr("add")}</button>`}
  </div>`;
}

function renderProducts(){
  const rawQ = document.getElementById("searchInput").value;
  const q = normaliseText(rawQ);
  const c = document.getElementById("categoryFilter").value;

  if(q){
    document.getElementById("productGrid").innerHTML = `<div class="search-group"><h3>${tr("search")}</h3><p>${tr("offersNote")}</p></div>`;
    return;
  }

  const items = smartSearchProducts(rawQ, c);
  document.getElementById("productGrid").innerHTML = items.map(card).join("") || `<p>${tr("cantFind")}</p>`;
}


function addSearchTextToRequestedCart(){
  const q = document.getElementById("searchInput").value.trim();
  if(!q){
    alert("Please type the item name.");
    return;
  }
  requestedCart.push({
    name: q,
    createdAt: new Date().toISOString()
  });
  save();
  renderCart();
  renderTopSearchResults();
  showToast(`${q} added to cart as requested item`);

  const box = document.getElementById("searchResultsTop");
  if(box){
    box.innerHTML = `<div class="top-no-result success">
      <b>${q}</b> has been added to your cart as a requested item.<br>
      Need another product? Type it in the search bar and add again.
      <br><br><button onclick="openCart()">View Cart</button>
    </div>`;
    box.classList.add("show");
  }
}

function fillRequestFromSearch(){
  const q = document.getElementById("searchInput").value.trim();
  document.querySelector(".request-box").scrollIntoView({behavior:"smooth"});
  setTimeout(()=>{
    const input = document.getElementById("requestName");
    if(input){ input.value = q; input.focus(); }
  },400);
}

function addToCart(id){
  refreshProductsFromAdminStore();
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p || p.stock !== "In Stock") return;
  const limit = stockLimit(p);
  const currentQty = cart[id] || 0;
  if(Number.isFinite(limit) && currentQty >= limit){
    alert(`${p.name}: only ${limit} available in stock.`);
    return;
  }
  cart[id] = currentQty + 1;
  save();
  renderCart();
  renderMostOrdered();
  renderSpecialOffers();
  renderOfferSlider();
  renderProducts();
  renderTopSearchResults();
  showToast(`${p.name} added to cart`);
}
function changeQty(id, delta){
  refreshProductsFromAdminStore();
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p) return;
  const limit = stockLimit(p);
  const nextQty = (cart[id] || 0) + delta;
  if(delta > 0 && Number.isFinite(limit) && nextQty > limit){
    alert(`${p.name}: only ${limit} available in stock.`);
    return;
  }
  cart[id] = nextQty;
  if(cart[id] <= 0) {
    delete cart[id];
    if(window.recentRelatedAddedId === id) window.recentRelatedAddedId = null;
  }
  save();
  renderCart();
  renderMostOrdered();
  renderSpecialOffers();
  renderOfferSlider();
  renderProducts();
  renderTopSearchResults();
  if(p) showToast(cart[id] ? `${p.name}: ${cart[id]} in cart` : `${p.name} removed`);
}
function updateCartCount(){
  const count = Object.values(cart).reduce((a,b)=>a+b,0) + requestedCart.length + claimedRewards.length;
  document.getElementById("cartCount").innerText = count;
}
function openCart(){ document.getElementById("cartDrawer").classList.add("open"); renderCart(); }
function closeCart(){ document.getElementById("cartDrawer").classList.remove("open"); }
function cartLines(){
  return Object.entries(cart).map(([id,qty])=>({p:PRODUCTS.find(x=>x.id==id), qty})).filter(x=>x.p);
}
function subtotal(){
  return cartLines().reduce((s,x)=>s + priceOf(x.p)*x.qty,0);
}
function renderCartRewards(){
  const box = document.getElementById("cartRewardsBox");
  if(!box) return;
  const earned = earnedPoints();
  const used = usedRewardPoints();
  const available = availablePoints();

  const claimable = REWARD_CATALOG.filter(r => available >= r.points && !claimedRewards.some(c=>c.id===r.id));
  const locked = REWARD_CATALOG.filter(r => available < r.points && !claimedRewards.some(c=>c.id===r.id));
  const nextRewards = locked.slice(0,3);

  let html = `<div class="reward-balance">
    <b>Your Reward Points</b>
    <div>Points from this order: <b>${earned}</b></div>
    <div>Already used: <b>${used}</b></div>
    <div>Available to claim now: <b>${available}</b></div>
  </div>`;

  if(claimedRewards.length){
    html += `<h4>Claimed Free Items</h4>`;
    html += claimedRewards.map(r=>`<div class="claimed-reward">
      <span>${r.emoji} ${r.name}<br><small>${r.points} points used</small></span>
      <button onclick="removeReward('${r.id}')">Remove</button>
    </div>`).join("");
  }

  html += `<h4>You Can Claim Now</h4>`;
  if(claimable.length){
    html += claimable.map(r=>`<div class="reward-option">
      <div><b>${r.emoji} ${r.name}</b><br><small>${r.points} points required</small></div>
      <button onclick="claimReward('${r.id}')">Claim</button>
    </div>`).join("");
  }else{
    html += `<div class="reward-info">No free item available yet. Keep adding products to unlock rewards.</div>`;
  }

  html += `<h4>Next Rewards</h4>`;
  if(nextRewards.length){
    html += nextRewards.map(r=>{
      const need = Math.max(0, r.points - available);
      const spendNeed = Math.ceil(need / 10);
      return `<div class="reward-option locked">
        <div><b>${r.name}</b><br><small>Need ${need} more points / approx £${spendNeed} more spend</small></div>
        <button disabled>${r.points} pts</button>
      </div>`;
    }).join("");
  }else{
    html += `<div class="reward-info">All available reward levels are unlocked.</div>`;
  }

  box.innerHTML = html;
}

function earnedPoints(){
  return Math.floor(subtotal() * 10);
}

function usedRewardPoints(){
  return claimedRewards.reduce((s,r)=>s + Number(r.points || 0), 0);
}

function availablePoints(){
  return Math.max(0, earnedPoints() - usedRewardPoints());
}

function claimFixedReward(id){
  const reward = FIXED_REWARDS.find(r => r.id === id);
  if(!reward) return;
  if(availablePoints() < reward.points){
    alert("Not enough points for this reward.");
    return;
  }

  claimedRewards.push({
    ...reward,
    claimId: `${reward.id}_${Date.now()}_${Math.floor(Math.random()*10000)}`
  });

  save();
  renderCart();
  showToast(`${reward.name} claimed. ${availablePoints()} points remaining`);
}

function removeReward(claimId){
  claimedRewards = claimedRewards.filter(r => r.claimId !== claimId);
  save();
  renderCart();
  showToast("Reward removed");
}

function nextUnlockReward(){
  const points = availablePoints();
  return FIXED_REWARDS.find(r => points < r.points) || null;
}

function renderCartRewards(){
  const box = document.getElementById("cartRewardsBox");
  if(!box) return;

  const earned = earnedPoints();
  const used = usedRewardPoints();
  const available = availablePoints();
  const next = nextUnlockReward();

  let html = `<div class="reward-summary-card">
    <div class="reward-summary-title">Free Gift Rewards</div>
    <div class="reward-line"><span>Total points from this order</span><b>${earned}</b></div>
    <div class="reward-line"><span>Points used for gifts</span><b>${used}</b></div>
    <div class="reward-line strong"><span>Points remaining</span><b>${available}</b></div>
  `;

  if(claimedRewards.length){
    html += `<h4>Claimed Free Gifts</h4>`;
    html += `<div class="claimed-gift-grid">`;
    html += claimedRewards.map(r=>`<div class="claimed-gift-card">
      <img src="${r.image}" alt="${r.name}">
      <div><b>${r.name}</b><br><small>${r.points} points used</small></div>
      <button onclick="removeReward('${r.claimId}')">Remove</button>
    </div>`).join("");
    html += `</div>`;
  }

  html += `<h4>Choose Free Gifts</h4>
  <p class="reward-help">You can claim again and again while you have enough points.</p>
  <div class="gift-grid">`;

  html += FIXED_REWARDS.map(r=>{
    const can = available >= r.points;
    return `<div class="gift-card ${can?'':'locked'}">
      <img src="${r.image}" alt="${r.name}">
      <b>${r.name}</b>
      <span>${r.points} points</span>
      <button ${can?'':'disabled'} onclick="claimFixedReward('${r.id}')">${can?'Claim Free':'Locked'}</button>
    </div>`;
  }).join("");

  html += `</div>`;

  if(next){
    const need = next.points - available;
    const spendNeed = Math.ceil(need / 10);
    const progress = Math.max(0, Math.min(100, Math.round((available / next.points) * 100)));
    html += `<div class="next-reward-box">
      <img src="${next.image}" alt="${next.name}">
      <div><b>Next Gift</b><br><span>${next.name}</span><br><small>Need ${need} more points / approx £${spendNeed} more spend</small></div>
    </div>
    <div class="reward-progress"><div style="width:${progress}%"></div></div>
    <div class="reward-progress-label">${available} / ${next.points} remaining points</div>`;
  }else{
    html += `<div class="next-reward-box">
      <div><b>All gift levels unlocked with remaining points.</b><br><span>You can keep claiming while points are available.</span></div>
    </div>`;
  }

  html += `<div class="reward-ladder">
    <b>Reward List</b>
    ${FIXED_REWARDS.map(r => `<div class="${available >= r.points ? 'unlocked' : 'locked'}">
      <span>${r.points} pts</span><span>${r.name}</span>
    </div>`).join("")}
  </div>`;

  html += `</div>`;
  box.innerHTML = html;
}

function renderCart(){
  const lines = cartLines();
  const productHtml = lines.map(x=>`<div class="cart-item">
    <img class="mini-img" src="${x.p.image}" alt="${x.p.name}">
    <div><b>${x.p.name}</b><br><small>${money(priceOf(x.p))}</small><br><span class="qty"><button onclick="changeQty(${x.p.id},-1)">-</button> ${x.qty} <button onclick="changeQty(${x.p.id},1)">+</button></span></div>
    <b>${money(priceOf(x.p)*x.qty)}</b>
  </div>`).join("");

  const requestedHtml = requestedCart.map((r,i)=>`<div class="cart-item requested-item">
    <div class="request-icon">?</div>
    <div><b>${r.name}</b><br><small>Requested item - Price to be confirmed</small></div>
    <button class="remove-request" onclick="removeRequestedItem(${i})">Remove</button>
  </div>`).join("");

  const rewardHtml = claimedRewards.map(r=>`<div class="cart-item reward-cart-item">
    <img class="mini-img" src="${r.image}" alt="${r.name}">
    <div><b>${r.name}</b><br><small>Free gift - ${r.points} points used</small></div>
    <b>FREE</b>
  </div>`).join("");

  document.getElementById("cartItems").innerHTML = (productHtml + requestedHtml + rewardHtml) || `<p style='padding:15px'>${tr("emptyCart")}</p>`;
  document.getElementById("subtotal").innerText = money(subtotal());
  document.getElementById("pointsEarned").innerText = tr("rewardPoints") + ": " + earnedPoints();
  renderCartRewards();
  updateDelivery();
}

function normalisePostcode(pc){
  return String(pc || "").toUpperCase().replace(/\s+/g," ").trim();
}

function estimateDistanceFromPostcode(postcode){
  const pc = normalisePostcode(postcode).replace(/\s/g,"");
  if(!pc) return null;

  // Prototype distance estimate from:
  // 203 Willows Lane, Bolton, BL3 4AZ
  if(pc.startsWith("BL3")) return 2.0;
  if(pc.startsWith("BL1") || pc.startsWith("BL2") || pc.startsWith("BL4") || pc.startsWith("BL5")) return 3.0;
  if(pc.startsWith("BL6") || pc.startsWith("BL7")) return 7.0;
  if(pc.startsWith("WN")) return 9.5;
  if(pc.startsWith("M")) return 14.0;
  if(pc.startsWith("WA")) return 18.0;
  if(pc.startsWith("L")) return 24.0;

  return 25.0;
}

function deliveryChargeByRules(distance, orderValue){
  if(distance === null || isNaN(distance)){
    return {allowed:false, charge:0, message:"Please enter a valid postcode and click Check Postcode."};
  }

  if(distance <= 3){
    if(orderValue >= 50){
      return {allowed:true, charge:0, message:"âœ… Delivery available. Within 3 miles and order is Â£50+, so delivery is FREE."};
    }
    return {allowed:true, charge:3, message:"âœ… Delivery available. Within 3 miles. Delivery charge is Â£3. Spend Â£50+ for free delivery."};
  }

  if(distance <= 10){
    if(orderValue >= 200){
      return {allowed:true, charge:0, message:"âœ… Delivery available. Within 10 miles and order is Â£200+, so delivery is FREE."};
    }
    return {allowed:true, charge:10, message:"âœ… Delivery available. 3â€“10 miles. Delivery charge is Â£10. Spend Â£200+ for free delivery."};
  }

  if(distance <= 20){
    if(orderValue >= 200){
      return {allowed:true, charge:10, message:"âœ… Delivery available. 10â€“20 miles and order is Â£200+, delivery charge is Â£10."};
    }
    return {allowed:false, charge:0, message:"âŒ Delivery is not available for this postcode unless order is Â£200+. Collection only for this order."};
  }

  return {allowed:false, charge:0, message:"âŒ This postcode is outside our delivery area. Collection only from 203 Willows Lane, Bolton, BL3 4AZ."};
}

function checkPostcodeDistance(){
  const input = document.getElementById("postcode");
  const pc = input ? input.value : "";
  const resultBox = document.getElementById("postcodeResult");
  checkedPostcode = normalisePostcode(pc);
  checkedDistanceMiles = estimateDistanceFromPostcode(checkedPostcode);

  if(!checkedPostcode){
    checkedDistanceMiles = null;
    if(resultBox){
      resultBox.innerHTML = "Please enter a postcode.";
      resultBox.className = "postcode-result show no";
    }
    updateDelivery();
    return;
  }

  const rule = deliveryChargeByRules(checkedDistanceMiles, subtotal());
  if(resultBox){
    resultBox.innerHTML = `
      <b>Postcode:</b> ${checkedPostcode}<br>
      <b>Estimated Distance from Collection Point:</b> ${checkedDistanceMiles.toFixed(1)} miles<br>
      <span>${rule.message}</span>
    `;
    resultBox.className = "postcode-result show " + (rule.allowed ? "ok" : "no");
  }
  updateDelivery();
}


function updateDelivery(){
  const type = document.querySelector("input[name='orderType']:checked").value;
  const sub = subtotal();
  let charge = 0;
  let msg = "";
  let allowed = true;

  const deliveryNotice = document.getElementById("deliveryNoticeBox");
  const addressBox = document.getElementById("address");
  const postcodeBox = document.getElementById("postcode");

  if(type === "Collection"){
    if(deliveryNotice) deliveryNotice.style.display = "none";
    if(addressBox){
      addressBox.style.display = "none";
      addressBox.value = "";
      addressBox.required = false;
    }
    if(postcodeBox){
      postcodeBox.style.display = "none";
      postcodeBox.value = "";
      postcodeBox.required = false;
    }
    msg = "ðŸ“¦ Collection selected. Name and WhatsApp number only. Collection point: 203 Willows Lane, Bolton, BL3 4AZ. Collection time will be confirmed via WhatsApp.";
    document.getElementById("deliveryCharge").innerText = money(0);
  }else{
    if(deliveryNotice) deliveryNotice.style.display = "block";
    if(addressBox){
      addressBox.style.display = "block";
      addressBox.required = true;
    }
    if(postcodeBox){
      postcodeBox.style.display = "block";
      postcodeBox.required = true;
    }
    msg = "ðŸšš " + tr("deliverySelected");
    document.getElementById("deliveryCharge").innerText = tr("mayApply");
  }

  document.getElementById("deliveryMsg").innerText = msg;
  document.getElementById("total").innerText = money(sub);
  return {allowed, charge, total: sub, msg};
}

function createOrderId(){
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth()+1).padStart(2,"0");
  const day = String(d.getDate()).padStart(2,"0");
  const rand = Math.floor(1000 + Math.random()*9000);
  return `CE-${y}${m}${day}-${rand}`;
}

function clearCartAfterOrder(){
  cart = {};
  requestedCart = [];
  claimedRewards = [];
  save();
  renderCart();
  renderProducts();
  renderMostOrdered();

  // Close cart drawer
  const drawer = document.getElementById("cartDrawer");
  if(drawer) drawer.classList.remove("open");

  // Return to home/top page
  window.scrollTo({top:0, behavior:"smooth"});

  // Clear checkout fields except persistent UI
  ["customerName","whatsappNumber","postcode","address","notes"].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.value = "";
  });

  showToast("Order sent. Cart cleared.");
}

function sendWhatsAppOrder(){
  try{
    if(!validateCartStock(true)) return;
    const lines = cartLines();
    if(!lines.length && !requestedCart.length && !claimedRewards.length){
      alert("Cart is empty");
      return;
    }

    const d = updateDelivery();
    const type = document.querySelector("input[name='orderType']:checked").value;

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("whatsappNumber").value.trim();
    const postcodeEl = document.getElementById("postcode");
    const postcode = postcodeEl ? postcodeEl.value.trim() : "";
    const address = document.getElementById("address").value.trim();
    const notes = document.getElementById("notes").value.trim();
    const paymentEl = document.querySelector("input[name='paymentMethod']:checked");
    const paymentMethod = paymentEl ? paymentEl.value : "Cash";

    if(!name || !phone){
      alert("Please enter customer name and WhatsApp number.");
      return;
    }

    if(type === "Delivery"){
      if(!postcode){
        alert("Please enter delivery postcode.");
        return;
      }
      if(!address){
        alert("Please enter full delivery address.");
        return;
      }
    }

    const rewardPointsUsed = typeof usedRewardPoints === "function" ? usedRewardPoints() : claimedRewards.reduce((s,r)=>s + Number(r.points || 0),0);
    const rewardPointsRemaining = typeof availablePoints === "function" ? availablePoints() : Math.max(0, Math.floor(subtotal()*10) - rewardPointsUsed);

    const orderId = createOrderId();

    const orderData = {
      orderId: orderId,
      name: name,
      phone: phone,
      postcode: postcode,
      deliveryDistanceMiles: checkedDistanceMiles,
      type: type,
      address: address,
      notes: notes,
      items: lines.map(x => ({
        name: x.p.name,
        qty: x.qty,
        price: priceOf(x.p),
        total: priceOf(x.p) * x.qty
      })),
      requestedItems: requestedCart.map(x => x.name),
      rewards: claimedRewards.map(x => ({
        name: x.name,
        points: x.points,
        emoji: x.emoji || "ðŸŽ",
        image: x.image || ""
      })),
      rewardPointsUsed: rewardPointsUsed,
      rewardPointsRemaining: rewardPointsRemaining,
      paymentMethod: paymentMethod,
      bankDetails: paymentMethod === "Bank Transfer" ? BANK_TRANSFER_DETAILS : null,
      collectionInfo: STORE_COLLECTION_INFO,
      subtotal: subtotal(),
      delivery: d.charge || 0,
      total: d.total || subtotal()
    };

    let encoded = "";
    try{
      encoded = btoa(unescape(encodeURIComponent(JSON.stringify(orderData))));
    }catch(e){
      encoded = btoa(JSON.stringify(orderData));
    }

    const basePath = location.href.split("#")[0].replace(/index\.html.*$/,"");
    const orderPageLink = `${basePath}order.html#data=${encoded}`;

    let msg = `ðŸ›’ CHENNAI EXPRESS ORDER\n`;
    msg += `â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”\n\n`;
    msg += `ðŸ‘¤ Customer: ${name}\n`;
    msg += `ðŸ“± WhatsApp: ${phone}\n`;
    if(postcode) msg += `ðŸ“ Postcode: ${postcode}\n`;
    msg += `ðŸšš Order Type: ${type}\n`;
    if(type === "Delivery"){
      msg += `â„¹ï¸ Delivery charge may apply. We will confirm delivery charge and delivery time via WhatsApp.\n`;
    }else{
      msg += `ðŸ“¦ Collection point: 203 Willows Lane, Bolton, BL3 4AZ\n`;
      msg += `Collection hours: Tuesday - Sunday 11:00 AM - 9:00 PM. Monday Closed.\n`;
    }
    if(address) msg += `ðŸ  Address: ${address}\n`;

    msg += `\nðŸ•’ COLLECTION / DELIVERY TIME\n`;
    msg += `â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”\n`;
    if(type === "Collection"){
      msg += `Collection Point: ${STORE_COLLECTION_INFO.collectionPoint}\n`;
      msg += `Collection Hours: ${STORE_COLLECTION_INFO.collectionHours}\n`;
      msg += `${STORE_COLLECTION_INFO.closedDay}\n`;
      msg += `Collection time will be confirmed via WhatsApp after order review.\n`;
    }else{
      msg += `Delivery time will be confirmed via WhatsApp after order review.\n`;
      msg += `Collection Point if needed: ${STORE_COLLECTION_INFO.collectionPoint}\n`;
    }

    if(lines.length){
      msg += `\nðŸ§¾ PAID ITEMS\n`;
      msg += `â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”\n`;
      lines.forEach((x,i)=> {
        msg += `${i+1}. ${x.qty} x ${x.p.name}\n`;
        msg += `   ${money(priceOf(x.p))} each = ${money(priceOf(x.p)*x.qty)}\n`;
      });
    }

    if(requestedCart.length){
      msg += `\nðŸ”Ž CUSTOMER REQUESTED ITEMS\n`;
      msg += `â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”\n`;
      requestedCart.forEach((r,i)=> {
        msg += `${i+1}. ${r.name} - Price to be confirmed\n`;
      });
    }

    if(claimedRewards.length){
      msg += `\nðŸŽ FREE GIFTS CLAIMED\n`;
      msg += `â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”\n`;
      claimedRewards.forEach((r,i)=> {
        msg += `${i+1}. ${r.name} - FREE (${r.points} points used)\n`;
      });
      msg += `\nReward Points Used: ${rewardPointsUsed}\n`;
      msg += `Reward Points Remaining: ${rewardPointsRemaining}\n`;
    }

    msg += `\nðŸ’· SUMMARY\n`;
    msg += `â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”\n`;
    msg += `Subtotal: ${money(subtotal())}\n`;
    msg += `Delivery: ${type === "Delivery" ? "May apply - to be confirmed" : money(0)}\n`;
    msg += `TOTAL: ${money((d.total || subtotal()))}\n`;
    if(requestedCart.length) msg += `Requested items are not included in total.\n`;
    msg += `\nðŸ’³ Payment Method: ${paymentMethod}\n`;
    if(paymentMethod === "Bank Transfer"){
      msg += `\nðŸ¦ BANK TRANSFER DETAILS\n`;
      msg += `Bank Name: ${BANK_TRANSFER_DETAILS.bankName}\n`;
      msg += `Account Name: ${BANK_TRANSFER_DETAILS.accountName}\n`;
      msg += `Sort Code: ${BANK_TRANSFER_DETAILS.sortCode}\n`;
      msg += `Account Number: ${BANK_TRANSFER_DETAILS.accountNumber}\n`;
      msg += `Reference: ${BANK_TRANSFER_DETAILS.reference}\n`;
    }
    if(notes) msg += `ðŸ“ Notes: ${notes}\n`;
    msg += `\nðŸ”— Order Preview Page:\n${orderPageLink}\n`;
    msg += `\nThank you.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    alert(`Order sent. Order ID: ${orderId}`);
    reduceStockAfterOrder(lines);
    clearCartAfterOrder();
  }catch(error){
    console.error(error);
    alert("Sorry, WhatsApp order could not be created. Please check the cart details and try again.");
  }
}
function addRequestedItemToCart(){
  const input = document.getElementById("requestName");
  const item = input ? input.value.trim() : "";
  if(!item){
    alert("Please type the item name.");
    if(input) input.focus();
    return;
  }
  requestedCart.push({name:item, createdAt:new Date().toISOString()});
  if(input){ input.value=""; input.focus(); }
  save();
  renderCart();
  const msgBox = document.getElementById("requestAddedMsg");
  if(msgBox){
    msgBox.innerHTML = `âœ… <b>${item}</b> has been added to your cart as a requested item.<br>Need another product? Type it above and add again.`;
    msgBox.classList.add("show");
  }
  showToast(`${item} added to cart as requested item`);
}

function removeRequestedItem(index){
  requestedCart.splice(index,1);
  save();
  renderCart();
  showToast("Requested item removed");
}


function relatedProductsFor(p){
  const words = normaliseText([p.name, p.subcategory, cleanPublicDescription(p.description)].join(" ")).split(" ").filter(w=>w.length>3);
  // Do not show items already added to cart in Related Items
  let scored = PRODUCTS.filter(x=>x.id!==p.id && (!cart[x.id] || x.id===window.recentRelatedAddedId)).map(x=>{
    const t = productText(x);
    let score = 0;
    if(x.category === p.category) score += 4;
    if(x.subcategory === p.subcategory) score += 10;
    words.forEach(w=>{ if(t.includes(w)) score += 3; });
    return {...x, _relScore: score};
  }).filter(x=>x._relScore>3);
  scored.sort((a,b)=>b._relScore-a._relScore);
  return scored.slice(0,6);
}

function openProductPage(id){
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p) return;
  let modal = document.getElementById("productModal");
  if(!modal){
    modal = document.createElement("div");
    modal.id = "productModal";
    modal.className = "product-modal";
    document.body.appendChild(modal);
  }
  const qty = cart[p.id] || 0;
  const old = p.offer_price ? `<span class="detail-old">${money(p.price)}</span>` : "";
  const related = relatedProductsFor(p);
  const description = cleanPublicDescription(p.description);
  modal.innerHTML = `
    <div class="product-detail" id="productDetailContent">
      <div class="detail-header">
        <button onclick="closeProductPage()">Back</button>
        <button onclick="closeProductPage()">X</button>
      </div>
      <img class="detail-img" src="${p.image}" alt="${p.name}">
      ${p.badge ? `<div class="detail-badge">${p.badge}</div>` : ""}
      <h1>${p.name}</h1>
      <p class="detail-category">${p.category} - ${p.subcategory} - ${p.pack}</p>
      <div class="detail-price">${old}<span>${money(priceOf(p))}</span></div>
      <p class="detail-stock">${stockLabel(p)}</p>
      <p class="detail-desc">${description}</p>
      <div class="detail-actions">
        ${p.stock !== "In Stock" 
          ? `<button class="disabled-detail" disabled>${tr("outOfStock")}</button>`
          : qty > 0
            ? `<div class="detail-qty"><button onclick="changeQty(${p.id},-1); refreshProductPageTop(${p.id})">-</button><b>${qty}</b><button onclick="addToCart(${p.id}); refreshProductPageTop(${p.id})">+</button></div>`
            : `<button class="detail-add" onclick="addToCart(${p.id}); refreshProductPageTop(${p.id})">${tr("addToCart")}</button>`
        }
        <div class="detail-added-note">Cart updates automatically</div>
      </div>
      <h2>Related Items</h2>
      <div class="detail-related">
        ${related.length ? related.map(relatedCard).join("") : "<p>No related items found.</p>"}
      </div>
    </div>
  `;
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
  modal.scrollTop = 0;
  const detail = document.getElementById("productDetailContent");
  if(detail) detail.scrollTop = 0;
  window.currentProductDetailId = id;
}

function relatedCard(r){
  const qty = cart[r.id] || 0;
  return `
    <div class="related-card ${qty>0?'selected-related':''}">
      ${qty>0?`<div class="related-added">${qty}</div>`:""}
      <img src="${r.image}" onclick="openProductPageFromRelated(${r.id})">
      <b onclick="openProductPageFromRelated(${r.id})">${r.name}</b>
      <span>${money(priceOf(r))}</span>
      ${qty>0 
        ? `<div class="related-qty">
            <button onclick="event.stopPropagation(); window.recentRelatedAddedId=${r.id}; changeQty(${r.id},-1); refreshProductPageKeepRelated(window.currentProductDetailId)">-</button>
            <b>${qty}</b>
            <button onclick="event.stopPropagation(); window.recentRelatedAddedId=${r.id}; addToCart(${r.id}); refreshProductPageKeepRelated(window.currentProductDetailId)">+</button>
          </div>`
        : `<button onclick="event.stopPropagation(); window.recentRelatedAddedId=${r.id}; addToCart(${r.id}); refreshProductPageKeepRelated(window.currentProductDetailId)">${tr("add")}</button>`
      }
    </div>
  `;
}

function refreshProductPageTop(id){
  const modal = document.getElementById("productModal");
  if(id && modal && modal.classList.contains("show")){
    openProductPage(id);
    modal.scrollTop = 0;
    setTimeout(()=>{
      const detail = document.getElementById("productDetailContent");
      if(detail) detail.scrollTop = 0;
    },0);
  }
}

function refreshProductPageKeepRelated(id){
  const modal = document.getElementById("productModal");
  if(id && modal && modal.classList.contains("show")){
    openProductPage(id);
    setTimeout(()=>{
      const heading = [...document.querySelectorAll(".product-detail h2")].find(h=>h.innerText.includes("Related"));
      if(heading) heading.scrollIntoView({behavior:"auto", block:"start"});
    },0);
  }
}

function refreshProductPage(id){
  const modal = document.getElementById("productModal");
  if(id && modal && modal.classList.contains("show")){
    const keepTop = modal.scrollTop < 120;
    openProductPage(id);
    if(!keepTop){
      setTimeout(()=>{
        const heading = [...document.querySelectorAll(".product-detail h2")].find(h=>h.innerText.includes("Related"));
        if(heading) heading.scrollIntoView({behavior:"instant", block:"start"});
      },0);
    }
  }
}

function openProductPageFromRelated(id){
  openProductPage(id);
  const modal = document.getElementById("productModal");
  if(modal) modal.scrollTop = 0;
  setTimeout(()=>{
    const detail = document.getElementById("productDetailContent");
    if(detail) detail.scrollTop = 0;
  },0);
}

function closeProductPage(){
  const modal = document.getElementById("productModal");
  if(modal) modal.classList.remove("show");
  document.body.style.overflow = "";
}


function toggleMenu(){
  const menu = document.getElementById("quickMenu");
  if(menu){ menu.remove(); return; }
  const m = document.createElement("div");
  m.id = "quickMenu";
  m.className = "quick-menu";
  m.innerHTML = `
    <button onclick="setCategory('Restaurant Food'); toggleMenu()">Restaurant Food</button>
    <button onclick="setCategory('Grocery'); toggleMenu()">Grocery</button>
    <button onclick="scrollToOffers(); toggleMenu()">Offers</button>
    <button onclick="scrollToRewards(); toggleMenu()">Rewards</button>
    <button onclick="document.querySelector('.request-box').scrollIntoView({behavior:'smooth'}); toggleMenu()">Request Item</button>
  `;
  document.body.appendChild(m);
}

function showToast(text){
  let t = document.getElementById("toast");
  if(!t){
    t = document.createElement("div");
    t.id = "toast";
    document.body.appendChild(t);
  }
  t.innerText = text;
  t.className = "toast show";
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(()=>{ t.className = "toast"; }, 1800);
}

init();


