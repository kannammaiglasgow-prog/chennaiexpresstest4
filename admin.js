
let products = [];
let pendingImageUpload = null;
const ADMIN_PRODUCTS_STORAGE_KEY = "ce_admin_products";
let orders = [
  {
    order_id:"CE-DEMO-0001",
    customer_name:"Demo Customer",
    whatsapp_number:"07300000000",
    order_type:"Collection",
    payment_method:"Cash",
    status:"pending",
    collection_date:"",
    collection_time:"",
    delivery_date:"",
    delivery_time:"",
    admin_note:"",
    subtotal:28.97,
    delivery_charge:0,
    total:28.97,
    reward_points_used:500,
    reward_points_remaining:0,
    items:[
      {name:"Chicken Biryani", qty:2, price:8.99, total:17.98, status:"available"},
      {name:"Gingelly Oil 1L", qty:1, price:5.99, total:5.99, status:"available"},
      {name:"Chicken Roll", qty:2, price:2.50, total:5.00, status:"available"}
    ],
    removed_items:[],
    rewards:[
      {name:"Free Chicken Roll", points:500, emoji:"🌯"}
    ]
  }
];

let customers = [];
let rewards = [
  {points_required:500, reward_name:"Free Chicken Roll"},
  {points_required:1000, reward_name:"Free 1kg Puttu"},
  {points_required:2000, reward_name:"Free Chicken Biryani"},
  {points_required:3000, reward_name:"Free Gingelly Oil"}
];

function showTab(id){
  document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function statusBadge(status){
  return `<span class="badge ${status}">${String(status || "").replace("_"," ")}</span>`;
}

function imageSrc(path){
  if(!path) return "";
  if(path.startsWith("http") || path.startsWith("data:")) return path;
  if(path.startsWith("../")) return path;
  return "../" + path;
}

document.addEventListener("error", function(event){
  const img = event.target;
  if(!img || img.tagName !== "IMG" || img.dataset.fallbackApplied) return;
  img.dataset.fallbackApplied = "true";
  const fallback = document.createElement("div");
  fallback.className = `${img.className || ""} image-placeholder admin-img-fallback`.trim();
  fallback.textContent = img.alt || "No Image";
  img.replaceWith(fallback);
}, true);

function escapeHtml(v){
  return String(v || "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;");
}

function cleanText(value){
  const text = String(value || "").trim();
  return text || null;
}

function numberOrNull(value){
  if(value === null || value === undefined) return null;
  const text = String(value).trim();
  if(text === "") return null;
  const num = Number(text);
  return Number.isFinite(num) ? num : null;
}

function dbProductToAdmin(p){
  return {
    db_id:p.id,
    sku:p.sku || "",
    name:p.name || "",
    category:p.category || "",
    subcategory:p.subcategory || "",
    description:p.description || "",
    price:Number(p.offer_price || p.price || 0),
    normal_price:Number(p.price || 0),
    offer_price:p.offer_price,
    pack_size:p.pack_size || "",
    image:p.image_url || "",
    stock_qty:Number(p.stock_qty || 0),
    stock_status:p.stock_status || "in_stock",
    is_best_seller:!!p.is_best_seller,
    is_special_offer:!!p.is_special_offer,
    allergy_information:p.allergy_information || "",
    ingredients:p.ingredients || "",
    is_vegetarian:p.is_vegetarian || "",
    is_halal:p.is_halal || ""
  };
}

function localProductToAdmin(p){
  return {
    db_id:null,
    frontend_id:p.id || null,
    sku:p.sku || `LOCAL-${p.id || ""}`,
    name:p.name || "",
    category:p.category || "",
    subcategory:p.subcategory || "",
    description:p.description || "",
    price:Number(p.offer_price || p.price || 0),
    normal_price:Number(p.price || 0),
    offer_price:p.offer_price || null,
    pack_size:p.pack || p.pack_size || "",
    image:p.image || "",
    stock_qty:Number(p.stock_qty || p.units_per_case || 1),
    stock_status:p.stock === "Out of Stock" ? "out_of_stock" : "in_stock",
    is_best_seller:false,
    is_special_offer:!!p.offer_price,
    invoice_amount:p.invoice_amount,
    invoice_qty:p.invoice_qty,
    units_per_case:p.units_per_case,
    allergy_information:"",
    ingredients:"",
    is_vegetarian:"",
    is_halal:""
  };
}

function adminProductToFrontend(p, index){
  const normalPrice = numberOrNull(p.normal_price) ?? numberOrNull(p.price) ?? 0;
  const offerPrice = numberOrNull(p.offer_price);
  return {
    id:p.frontend_id || p.id || index + 1,
    sku:p.sku || `CE-${String(index + 1).padStart(3,"0")}`,
    name:p.name || "",
    category:p.category || "Grocery",
    subcategory:p.subcategory || "",
    price:normalPrice,
    offer_price:offerPrice,
    pack:p.pack_size || p.pack || "",
    stock:p.stock_status === "out_of_stock" ? "Out of Stock" : "In Stock",
    badge:p.is_special_offer || offerPrice ? "Special Offer" : (p.is_best_seller ? "Best Seller" : ""),
    emoji:"🛒",
    description:p.description || "",
    image:p.image || "",
    invoice_amount:p.invoice_amount,
    invoice_qty:p.invoice_qty,
    units_per_case:p.units_per_case
  };
}

function saveProductsToLocalStore(){
  const frontendProducts = products.map(adminProductToFrontend);
  localStorage.setItem(ADMIN_PRODUCTS_STORAGE_KEY, JSON.stringify(frontendProducts));
}

function loadSavedFrontendProducts(){
  try{
    const saved = JSON.parse(localStorage.getItem(ADMIN_PRODUCTS_STORAGE_KEY) || "null");
    return Array.isArray(saved) && saved.length ? saved : null;
  }catch(e){
    console.warn("Could not load saved admin products", e);
    return null;
  }
}

function loadLocalProductsFallback(message){
  const fileProducts = typeof PRODUCTS !== "undefined" ? PRODUCTS : window.PRODUCTS;
  const sourceProducts = loadSavedFrontendProducts() || fileProducts;
  if(Array.isArray(sourceProducts) && sourceProducts.length){
    products = sourceProducts.map(localProductToAdmin);
    renderProducts();
    renderDashboard();
    return true;
  }
  const productList = document.getElementById("productList");
  if(productList && message) productList.innerHTML = `<div class="card"><b>Products not loaded</b><p>${message}</p></div>`;
  return false;
}

function adminProductToDb(p){
  const normalPrice = numberOrNull(p.normal_price) ?? numberOrNull(p.price) ?? 0;
  const offerPrice = numberOrNull(p.offer_price);
  return {
    sku:cleanText(p.sku),
    name:cleanText(p.name),
    category:cleanText(p.category) || "Grocery",
    subcategory:cleanText(p.subcategory),
    description:cleanText(p.description),
    price:normalPrice,
    offer_price:offerPrice,
    pack_size:cleanText(p.pack_size),
    image_url:cleanText(p.image),
    stock_status:p.stock_status || "in_stock",
    stock_qty:Number.isFinite(Number(p.stock_qty)) ? Number(p.stock_qty) : 0,
    is_best_seller:!!p.is_best_seller,
    is_special_offer:!!p.is_special_offer,
    allergy_information:cleanText(p.allergy_information),
    ingredients:cleanText(p.ingredients),
    is_vegetarian:cleanText(p.is_vegetarian),
    is_halal:cleanText(p.is_halal),
    is_active:true,
    updated_at:new Date().toISOString()
  };
}

async function loadProductsFromSupabase(){
  loadLocalProductsFallback("Showing local invoice products from products.js.");
}

async function saveProductToSupabase(index){
  const p = products[index];
  if(!p) return false;
  if(!String(p.name || "").trim()){
    alert("Product name is required.");
    return false;
  }
  products[index] = p;
  saveProductsToLocalStore();
  alert("Product saved. Shop page refresh pannina same browser-la reflect aagum.");
  renderProducts();
  closeProductEditor();
  return true;
}

async function deleteProductFromSupabase(index){
  const p = products[index];
  if(!p) return;
  if(!confirm(`Delete product: ${p.name}?`)) return;

  products.splice(index,1);
  saveProductsToLocalStore();
  renderProducts();
  renderDashboard();
}

async function uploadProductImage(file){
  if(!file) return null;
  if(!window.ceSupabase || !ceSupabase.storage){
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(file);
    });
  }
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g,"_");
  const path = `products/${Date.now()}_${Math.random().toString(36).slice(2)}_${safeName}`;

  const {error} = await ceSupabase.storage
    .from("product-images")
    .upload(path, file, {
      cacheControl:"3600",
      contentType:file.type || "image/jpeg",
      upsert:false
    });

  if(error){
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => {
        alert("Image upload failed: " + error.message);
        resolve(null);
      };
      reader.readAsDataURL(file);
    });
  }

  const {data} = ceSupabase.storage.from("product-images").getPublicUrl(path);
  return data.publicUrl;
}

function renderDashboard(){
  document.getElementById("todayOrders").innerText = orders.length;
  document.getElementById("pendingOrders").innerText = orders.filter(o=>o.status==="pending").length;
  document.getElementById("outStock").innerText = products.filter(p=>p.stock_status==="out_of_stock").length;
  document.getElementById("rewardClaims").innerText = "Demo";
}

function renderProducts(){
  const html = `<div class="table product-table">
    <div class="row head product-row"><div>Product</div><div>Category</div><div>Price</div><div>Stock</div><div>Actions</div></div>
    ${products.map((p,i)=>`<div class="row product-row product-click" onclick="openProductEditor(${i})">
      <div class="admin-product-main">
        ${p.image ? `<img src="${imageSrc(p.image)}" alt="${escapeHtml(p.name)}">` : `<div class="no-img">No Image</div>`}
        <div>
          <b>${escapeHtml(p.name)}</b><br>
          <small>${escapeHtml(p.sku || "")} • ${escapeHtml(p.pack_size || "")}</small><br>
          <small>${escapeHtml(p.description || "")}</small>
          ${p.allergy_information ? `<br><small><b>Allergy:</b> ${escapeHtml(p.allergy_information)}</small>` : ""}
        </div>
      </div>
      <div>${escapeHtml(p.category)}<br><small>${escapeHtml(p.subcategory || "")}</small></div>
      <div>
        ${p.offer_price ? `<span class="old-price">£${Number(p.normal_price || p.price).toFixed(2)}</span><br><b class="offer-price">£${Number(p.offer_price).toFixed(2)}</b>` : `<b>£${Number(p.price).toFixed(2)}</b>`}
        ${p.is_special_offer ? `<br><span class="badge low_stock">Offer</span>` : ""}
      </div>
      <div>${statusBadge(p.stock_status)}<br><small>Qty: ${p.stock_qty}</small></div>
      <div class="actions" onclick="event.stopPropagation()">
        <button class="green" onclick="setStock(${i},'in_stock')">In</button>
        <button class="dark" onclick="setStock(${i},'low_stock')">Low</button>
        <button class="red" onclick="setStock(${i},'out_of_stock')">Out</button>
        <button class="red" onclick="deleteProductFromSupabase(${i})">Delete</button>
      </div>
    </div>`).join("")}
  </div>
  <div id="productEditor"></div>`;
  document.getElementById("productList").innerHTML = `<p><b>Total Products:</b> ${products.length}</p>` + html;
}

async function setStock(i,status){
  if(!products[i]) return;
  const previousStatus = products[i].stock_status;
  products[i].stock_status = status;
  const saved = await saveProductToSupabase(i);
  if(!saved) products[i].stock_status = previousStatus;
  renderDashboard();
}

function addLocalProduct(){
  products.unshift({
    sku:"CE-" + Date.now(),
    name:document.getElementById("pName").value || "New Product",
    category:document.getElementById("pCategory").value || "Grocery",
    subcategory:"",
    description:"",
    price:Number(document.getElementById("pPrice").value || 0),
    normal_price:Number(document.getElementById("pPrice").value || 0),
    offer_price:null,
    pack_size:"",
    image:"",
    stock_qty:Number(document.getElementById("pStock").value || 0),
    stock_status:document.getElementById("pStatus").value,
    allergy_information:"",
    ingredients:"",
    is_vegetarian:"",
    is_halal:"",
    is_best_seller:false,
    is_special_offer:false
  });
  saveProductsToLocalStore();
  renderProducts();
  openProductEditor(0);
}

function openProductEditor(index){
  const p = products[index];

  let modal = document.getElementById("productEditorModal");
  if(!modal){
    modal = document.createElement("div");
    modal.id = "productEditorModal";
    modal.className = "product-editor-modal";
    document.body.appendChild(modal);
  }

  const categories = ["Grocery", "Restaurant Food", "Household", "Fresh Vegetables", "Fresh Seafood", "Fresh Meat"];
  const categoryOptions = categories.map(c => `<option value="${c}" ${p.category===c?"selected":""}>${c}</option>`).join("");

  modal.innerHTML = `<div class="product-editor-popup">
    <div class="popup-head">
      <h2>Edit Product</h2>
      <button onclick="closeProductEditor()">✕</button>
    </div>

    <div class="editor-preview">
      ${p.image ? `<img id="editImagePreview" src="${imageSrc(p.image)}" alt="${escapeHtml(p.name)}">` : `<div id="editImagePreview" class="image-placeholder">No Image</div>`}
      <div>
        <b>${escapeHtml(p.name)}</b><br>
        <small>Product ID / SKU is locked</small>
      </div>
    </div>

    <div class="editor-grid">
      <label>Product ID / SKU
        <input id="editSku" value="${escapeHtml(p.sku || "")}" readonly class="readonly-input">
      </label>

      <label>Product Name
        <input id="editName" value="${escapeHtml(p.name || "")}">
      </label>

      <label>Category
        <select id="editCategory">${categoryOptions}</select>
      </label>

      <label>Subcategory
        <input id="editSubcategory" value="${escapeHtml(p.subcategory || "")}">
      </label>

      <label>Normal Price
        <input id="editNormalPrice" type="number" step="0.01" value="${Number(p.normal_price || p.price || 0)}">
      </label>

      <label>Offer Price
        <input id="editOfferPrice" type="number" step="0.01" value="${p.offer_price || ""}">
      </label>

      <label>Pack Size / Weight
        <input id="editPackSize" value="${escapeHtml(p.pack_size || "")}">
      </label>

      <label>Stock Quantity
        <input id="editStockQty" type="number" value="${Number(p.stock_qty || 0)}">
      </label>

      <label>Stock Status
        <select id="editStockStatus">
          <option value="in_stock" ${p.stock_status==="in_stock"?"selected":""}>In Stock</option>
          <option value="low_stock" ${p.stock_status==="low_stock"?"selected":""}>Low Stock</option>
          <option value="out_of_stock" ${p.stock_status==="out_of_stock"?"selected":""}>Out of Stock</option>
        </select>
      </label>

      <label>Vegetarian / Non-Vegetarian
        <select id="editVeg">
          <option value="">Not specified</option>
          <option value="Vegetarian" ${p.is_vegetarian==="Vegetarian"?"selected":""}>Vegetarian</option>
          <option value="Non-Vegetarian" ${p.is_vegetarian==="Non-Vegetarian"?"selected":""}>Non-Vegetarian</option>
        </select>
      </label>

      <label>Halal
        <select id="editHalal">
          <option value="">Not specified</option>
          <option value="Yes" ${p.is_halal==="Yes"?"selected":""}>Yes</option>
          <option value="No" ${p.is_halal==="No"?"selected":""}>No</option>
        </select>
      </label>

      <label>Badges
        <select id="editBadge">
          <option value="">No badge</option>
          <option value="Best Seller" ${p.is_best_seller?"selected":""}>Best Seller</option>
          <option value="Special Offer" ${p.is_special_offer?"selected":""}>Special Offer</option>
        </select>
      </label>
    </div>

    <div class="editor-full">
      <label>Photo URL
        <input id="editImageUrl" value="${escapeHtml(p.image || "")}" oninput="previewImageUrl()">
      </label>

      <label>Upload Photo
        <input id="editImageUpload" type="file" accept="image/*" onchange="previewUploadedImage(event)">
      </label>

      <label>Description
        <textarea id="editDescription">${escapeHtml(p.description || "")}</textarea>
      </label>

      <label>Ingredients
        <textarea id="editIngredients">${escapeHtml(p.ingredients || "")}</textarea>
      </label>

      <label>Allergy Information
        <textarea id="editAllergy">${escapeHtml(p.allergy_information || "")}</textarea>
      </label>
    </div>

    <div class="actions big-actions">
      <button class="green" onclick="saveProductEdit(${index})">Save Product Permanently</button>
      <button class="dark" onclick="closeProductEditor()">Close</button>
    </div>

    <p class="muted">Product ID is locked. Use Photo URL or Upload Photo. Upload needs Supabase Storage bucket: product-images.</p>
  </div>`;

  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}
function previewImageUrl(){
  const url = document.getElementById("editImageUrl").value.trim();
  const preview = document.getElementById("editImagePreview");
  if(!preview) return;
  if(url){
    if(preview.tagName.toLowerCase() === "img"){
      preview.src = imageSrc(url);
    }else{
      preview.outerHTML = `<img id="editImagePreview" src="${imageSrc(url)}" alt="Product preview">`;
    }
  }
}

async function previewUploadedImage(event){
  const file = event.target.files[0];
  if(!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    const dataUrl = reader.result;
    const preview = document.getElementById("editImagePreview");
    if(preview){
      if(preview.tagName.toLowerCase() === "img") preview.src = dataUrl;
      else preview.outerHTML = `<img id="editImagePreview" src="${dataUrl}" alt="Uploaded preview">`;
    }
  };
  reader.readAsDataURL(file);

  pendingImageUpload = uploadProductImage(file);
  const publicUrl = await pendingImageUpload;
  pendingImageUpload = null;
  if(publicUrl){
    const imageUrl = document.getElementById("editImageUrl");
    if(imageUrl) imageUrl.value = publicUrl;
    previewImageUrl();
  }
}

async function saveProductEdit(index){
  const p = products[index];
  if(!p) return;
  if(pendingImageUpload){
    const publicUrl = await pendingImageUpload;
    pendingImageUpload = null;
    if(publicUrl){
      const imageUrl = document.getElementById("editImageUrl");
      if(imageUrl) imageUrl.value = publicUrl;
    }
  }
  const badge = document.getElementById("editBadge").value;

  // Product ID / SKU is locked and cannot be changed from popup
  p.sku = p.sku;
  p.name = document.getElementById("editName").value.trim();
  p.category = document.getElementById("editCategory").value.trim();
  p.subcategory = document.getElementById("editSubcategory").value.trim();
  p.normal_price = Number(document.getElementById("editNormalPrice").value || 0);
  p.offer_price = document.getElementById("editOfferPrice").value ? Number(document.getElementById("editOfferPrice").value) : null;
  p.price = p.offer_price || p.normal_price;
  p.pack_size = document.getElementById("editPackSize").value.trim();
  p.stock_qty = Number(document.getElementById("editStockQty").value || 0);
  p.stock_status = document.getElementById("editStockStatus").value;
  p.is_vegetarian = document.getElementById("editVeg").value;
  p.is_halal = document.getElementById("editHalal").value;
  p.is_best_seller = badge === "Best Seller";
  p.is_special_offer = badge === "Special Offer" || !!p.offer_price;
  p.image = document.getElementById("editImageUrl").value.trim();
  p.description = document.getElementById("editDescription").value.trim();
  p.ingredients = document.getElementById("editIngredients").value.trim();
  p.allergy_information = document.getElementById("editAllergy").value.trim();

  await saveProductToSupabase(index);
}

function closeProductEditor(){
  const modal = document.getElementById("productEditorModal");
  if(modal) modal.classList.remove("show");
  document.body.style.overflow = "";
}

// Orders remain prototype in this v5
function renderOrders(){
  const html = `<div class="table">
    <div class="row head"><div>Order</div><div>Customer</div><div>Total</div><div>Status</div><div>Actions</div></div>
    ${orders.map((o,i)=>`<div class="row">
      <div><b>${o.order_id}</b><br><small>${o.order_type}</small></div>
      <div>${o.customer_name}<br><small>${o.whatsapp_number}</small></div>
      <div>£${Number(o.total).toFixed(2)}</div>
      <div>${statusBadge(o.status)}</div>
      <div class="actions">
        <button class="green" onclick="setOrderStatus(${i},'confirmed')">Confirm</button>
        <button class="dark" onclick="setOrderStatus(${i},'preparing')">Preparing</button>
        <button class="green" onclick="setOrderStatus(${i},'ready')">Ready</button>
        <button class="red" onclick="setOrderStatus(${i},'cancelled')">Cancel</button>
      </div>
    </div>`).join("")}
  </div>`;
  document.getElementById("orderList").innerHTML = html;
}

function setOrderStatus(i,status){
  orders[i].status = status;
  renderOrders();
  renderDashboard();
}

function renderCustomers(){
  const html = `<div class="table">
    <div class="row head"><div>Name</div><div>WhatsApp</div><div>Points</div><div>Orders</div><div>Actions</div></div>
    ${customers.map(c=>`<div class="row">
      <div>${c.name}</div>
      <div>${c.whatsapp_number}</div>
      <div>${c.reward_points}</div>
      <div>${c.total_orders}</div>
      <div class="actions"><button class="green">View</button></div>
    </div>`).join("")}
  </div>`;
  document.getElementById("customerList").innerHTML = html;
}

function addLocalCustomer(){
  customers.push({
    name:document.getElementById("cName").value || "Customer",
    whatsapp_number:document.getElementById("cPhone").value || "",
    reward_points:Number(document.getElementById("cPoints").value || 0),
    total_orders:0
  });
  renderCustomers();
}

function renderRewards(){
  document.getElementById("rewardList").innerHTML = `<div class="table">
    <div class="row head"><div>Reward</div><div>Points</div><div></div><div></div><div>Actions</div></div>
    ${rewards.map(r=>`<div class="row">
      <div>${r.reward_name}</div><div>${r.points_required}</div><div></div><div></div>
      <div class="actions"><button class="green">Edit</button></div>
    </div>`).join("")}
  </div>`;
}

function previewCSV(event){
  const file = event.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const text = reader.result;
    const lines = text.split(/\r?\n/).filter(Boolean);
    document.getElementById("csvPreview").innerHTML = `<div class="card"><b>CSV Preview</b><pre>${lines.slice(0,8).join("\n")}</pre><p>In production this will upload to Supabase products table.</p></div>`;
  };
  reader.readAsText(file);
}

function downloadTemplate(){
  const csv = "sku,name,category,subcategory,description,price,offer_price,pack_size,stock_qty,stock_status,ingredients,allergy_information,is_vegetarian,is_halal\\nCE-001,Product Name,Grocery,Masala,Description,1.99,,100g,10,in_stock,Ingredients,Allergy info,Vegetarian,Yes";
  const blob = new Blob([csv], {type:"text/csv"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "products_upload_template.csv";
  a.click();
}

async function init(){
  renderOrders();
  renderCustomers();
  renderRewards();
  await loadProductsFromSupabase();
}
init();
