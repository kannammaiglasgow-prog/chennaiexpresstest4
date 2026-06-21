const WHATSAPP_NUMBER = "447309736428";

const STORE_COLLECTION_INFO = {
  collectionPoint: "203 Willows Lane, Bolton, BL3 4AZ",
  collectionHours: "Tuesday â€“ Sunday: 11:00 AM â€“ 9:00 PM",
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
let currentLanguage = "en";

const I18N = {
  en: {
    restaurant:"Restaurant", grocery:"Grocery", search:"Search pannunga", searchPlaceholder:"Product name type pannunga...",
    mostOrdered:"Popular Items", specialOffers:"Special Offers", offersNote:"Discount irukkura items mattum inge varum.",
    allProducts:"All Products", allCategories:"All Categories", rewardsShop:"Rewards", rewardsText:"Â£1 spend = 10 points. Free items claim pannalam.",
    cantFind:"Item kidaikkalaya?", requestText:"Item name type panni cart-la add pannunga. Price WhatsApp-la confirm pannuvom.",
    requestPlaceholder:"Example: MTR Rava Idli Mix", addRequest:"Request Cart-la Add pannunga", yourCart:"Ungal Cart", subtotal:"Subtotal",
    checkout:"Checkout", collection:"Collection", delivery:"Delivery", deliveryInfo:"Delivery Information",
    deliveryNotice:"Delivery charge varalam. Order check pannitu WhatsApp-la charge/time confirm pannuvom.",
    collectionInfo:"Collection Information", collectionPoint:"Collection Point:", collectionHours:"Collection Hours:",
    timingNote:"Order potta piragu collection or delivery time WhatsApp-la confirm pannuvom.",
    customerName:"Customer name", postcode:"Delivery postcode e.g. BL3 4AZ", whatsappNumber:"Customer WhatsApp number",
    address:"Full delivery address with postcode", paymentMethod:"Payment Method", cash:"Cash", card:"Card", bankTransfer:"Bank Transfer",
    notes:"Customer notes optional", total:"Total", sendWhatsapp:"Order WhatsApp-ku Send pannunga", home:"Home", products:"Products", rewards:"Rewards", cart:"Cart",
    add:"Add", out:"Out", addOffer:"Offer Add", addToCart:"Cart-la Add", outOfStock:"Stock illa", inStock:"Stock irukku",
    rewardPoints:"Reward Points", emptyCart:"Cart empty-a irukku.", requestedItem:"Requested item â€¢ Price confirm pannuvom",
    mayApply:"Confirm pannuvom", deliverySelected:"Delivery selected. Full address and postcode enter pannunga. Delivery charge WhatsApp-la confirm pannuvom."
  },
  ta: {
    restaurant:"à®‰à®£à®µà®•à®®à¯", grocery:"à®•à®¿à®°à®¾à®šà®°à®¿", search:"à®¤à¯‡à®Ÿà¯", searchPlaceholder:"à®ªà¯Šà®°à¯à®Ÿà¯à®•à®³à¯, à®ªà®¿à®°à®¾à®£à¯à®Ÿà¯à®•à®³à¯ à®¤à¯‡à®Ÿà¯à®™à¯à®•à®³à¯...",
    mostOrdered:"à®‡à®¨à¯à®¤ à®µà®¾à®°à®®à¯ à®…à®¤à®¿à®•à®®à¯ à®†à®°à¯à®Ÿà®°à¯ à®šà¯†à®¯à¯à®¤à®µà¯ˆ", specialOffers:"à®šà®¿à®±à®ªà¯à®ªà¯ à®šà®²à¯à®•à¯ˆà®•à®³à¯", offersNote:"à®¤à®³à¯à®³à¯à®ªà®Ÿà®¿ à®ªà¯Šà®°à¯à®Ÿà¯à®•à®³à¯ à®®à®Ÿà¯à®Ÿà¯à®®à¯ à®‡à®™à¯à®•à¯‡ à®µà®°à¯à®®à¯.",
    allProducts:"à®…à®©à¯ˆà®¤à¯à®¤à¯ à®ªà¯Šà®°à¯à®Ÿà¯à®•à®³à¯", allCategories:"à®…à®©à¯ˆà®¤à¯à®¤à¯ à®µà®•à¯ˆà®•à®³à¯", rewardsShop:"à®°à®¿à®µà®¾à®°à¯à®Ÿà¯à®¸à¯", rewardsText:"Â£1 à®šà¯†à®²à®µà¯ = 10 à®ªà¯à®³à¯à®³à®¿à®•à®³à¯. à®‡à®²à®µà®š à®ªà¯Šà®°à¯à®Ÿà¯à®•à®³à¯ à®ªà¯†à®±à®²à®¾à®®à¯.",
    cantFind:"à®¤à¯‡à®µà¯ˆà®¯à®¾à®© à®ªà¯Šà®°à¯à®³à¯ à®•à®¿à®Ÿà¯ˆà®•à¯à®•à®µà®¿à®²à¯à®²à¯ˆà®¯à®¾?", requestText:"à®ªà¯Šà®°à¯à®³à¯ à®ªà¯†à®¯à®°à¯ˆ type à®šà¯†à®¯à¯à®¤à¯ cart-à®²à¯ à®šà¯‡à®°à¯à®•à¯à®•à®µà¯à®®à¯. à®µà®¿à®²à¯ˆ WhatsApp-à®²à¯ à®‰à®±à¯à®¤à®¿ à®šà¯†à®¯à¯à®¯à®ªà¯à®ªà®Ÿà¯à®®à¯.",
    requestPlaceholder:"à®‰à®¤à®¾: MTR Rava Idli Mix", addRequest:"Request-à® Cart-à®²à¯ à®šà¯‡à®°à¯à®•à¯à®•", yourCart:"à®‰à®™à¯à®•à®³à¯ Cart", subtotal:"Subtotal",
    checkout:"Checkout", collection:"Collection", delivery:"Delivery", deliveryInfo:"Delivery à®¤à®•à®µà®²à¯",
    deliveryNotice:"Delivery charge à®‡à®°à¯à®•à¯à®•à®²à®¾à®®à¯. à®‰à®™à¯à®•à®³à¯ order à®ªà®¾à®°à¯à®¤à¯à®¤ à®ªà®¿à®±à®•à¯ WhatsApp-à®²à¯ charge/time confirm à®šà¯†à®¯à¯à®µà¯‹à®®à¯.",
    collectionInfo:"Collection à®¤à®•à®µà®²à¯", collectionPoint:"Collection à®‡à®Ÿà®®à¯:", collectionHours:"Collection à®¨à¯‡à®°à®®à¯:",
    timingNote:"Order à®šà¯†à®¯à¯à®¤ à®ªà®¿à®±à®•à¯ collection à®…à®²à¯à®²à®¤à¯ delivery time-à® WhatsApp-à®²à¯ confirm à®šà¯†à®¯à¯à®µà¯‹à®®à¯.",
    customerName:"Customer à®ªà¯†à®¯à®°à¯", postcode:"Delivery postcode e.g. BL3 4AZ", whatsappNumber:"Customer WhatsApp number",
    address:"Postcode à®‰à®Ÿà®©à¯ à®®à¯à®´à¯ delivery address", paymentMethod:"Payment à®®à¯à®±à¯ˆ", cash:"Cash", card:"Card", bankTransfer:"Bank Transfer",
    notes:"Customer notes optional", total:"Total", sendWhatsapp:"WhatsApp-à®•à¯à®•à¯ Order à®…à®©à¯à®ªà¯à®ªà¯", home:"Home", products:"Products", rewards:"Rewards", cart:"Cart",
    add:"à®šà¯‡à®°à¯", out:"à®‡à®²à¯à®²à¯ˆ", addOffer:"à®šà®²à¯à®•à¯ˆà®¯à¯ˆ à®šà¯‡à®°à¯", addToCart:"Cart-à®²à¯ à®šà¯‡à®°à¯", outOfStock:"Stock à®‡à®²à¯à®²à¯ˆ", inStock:"Stock à®‰à®³à¯à®³à®¤à¯",
    rewardPoints:"Reward Points", emptyCart:"à®‰à®™à¯à®•à®³à¯ cart à®•à®¾à®²à®¿à®¯à®¾à®• à®‰à®³à¯à®³à®¤à¯.", requestedItem:"Requested item â€¢ à®µà®¿à®²à¯ˆ à®‰à®±à¯à®¤à®¿ à®šà¯†à®¯à¯à®¯à®ªà¯à®ªà®Ÿà¯à®®à¯",
    mayApply:"à®‡à®°à¯à®•à¯à®•à®²à®¾à®®à¯", deliverySelected:"Delivery à®¤à¯‡à®°à¯à®µà¯ à®šà¯†à®¯à¯à®¤à¯à®³à¯à®³à¯€à®°à¯à®•à®³à¯. à®®à¯à®´à¯ address à®®à®±à¯à®±à¯à®®à¯ postcode à®‡à®Ÿà¯à®™à¯à®•à®³à¯. Delivery charge à®‡à®°à¯à®•à¯à®•à®²à®¾à®®à¯; WhatsApp-à®²à¯ confirm à®šà¯†à®¯à¯à®µà¯‹à®®à¯."
  },
  si: {
    restaurant:"à¶†à·„à·à¶»", grocery:"à·ƒà·’à¶½à·Šà¶½à¶»", search:"à·ƒà·œà¶ºà¶±à·Šà¶±", searchPlaceholder:"à¶±à·’à·‚à·Šà¶´à·à¶¯à¶± à·ƒà·„ brands à·ƒà·œà¶ºà¶±à·Šà¶±...",
    mostOrdered:"à¶¸à·™à¶¸ à·ƒà¶­à·’à¶ºà·š à·€à·à¶©à·’à¶¸ à¶‡à¶«à·€à·”à¶¸à·Š", specialOffers:"à·€à·’à·à·šà·‚ offers", offersNote:"Discount products à¶´à¶¸à¶«à¶šà·Š à¶¸à·™à·„à·’ à¶´à·™à¶±à·Šà·€à¶ºà·’.",
    allProducts:"à·ƒà·’à¶ºà¶½à·” à¶±à·’à·‚à·Šà¶´à·à¶¯à¶±", allCategories:"à·ƒà·’à¶ºà¶½à·” à·€à¶»à·Šà¶œ", rewardsShop:"Rewards", rewardsText:"Â£1 spend = 10 points. Free products redeem à¶šà¶»à¶±à·Šà¶±.",
    cantFind:"à¶”à¶¶à¶§ à¶…à·€à·à·Šâ€à¶º item à¶‘à¶š à¶±à·à¶¯à·Šà¶¯?", requestText:"Item name type à¶šà¶» cart à¶‘à¶šà¶§ add à¶šà¶»à¶±à·Šà¶±. Price WhatsApp à·„à¶»à·„à· confirm à·€à·š.",
    requestPlaceholder:"à¶‹à¶¯à·: MTR Rava Idli Mix", addRequest:"Request Cart à¶‘à¶šà¶§ add à¶šà¶»à¶±à·Šà¶±", yourCart:"à¶”à¶¶à¶œà·š Cart", subtotal:"Subtotal",
    checkout:"Checkout", collection:"Collection", delivery:"Delivery", deliveryInfo:"Delivery à¶­à·œà¶»à¶­à·”à¶»à·”",
    deliveryNotice:"Delivery charge apply à·€à·’à¶º à·„à·à¶š. Order review à¶šà¶» WhatsApp à·„à¶»à·„à· charge/time confirm à¶šà¶»à¶¸à·”.",
    collectionInfo:"Collection à¶­à·œà¶»à¶­à·”à¶»à·”", collectionPoint:"Collection Point:", collectionHours:"Collection Hours:",
    timingNote:"Order à¶šà·’à¶»à·“à¶¸à·™à¶±à·Š à¶´à·ƒà·” collection/delivery time WhatsApp à·„à¶»à·„à· confirm à¶šà¶»à¶¸à·”.",
    customerName:"Customer name", postcode:"Delivery postcode e.g. BL3 4AZ", whatsappNumber:"Customer WhatsApp number",
    address:"Postcode à·ƒà¶¸à¶œ full delivery address", paymentMethod:"Payment Method", cash:"Cash", card:"Card", bankTransfer:"Bank Transfer",
    notes:"Customer notes optional", total:"Total", sendWhatsapp:"Order WhatsApp à¶šà¶»à¶±à·Šà¶±", home:"Home", products:"Products", rewards:"Rewards", cart:"Cart",
    add:"Add", out:"Out", addOffer:"Offer Add", addToCart:"Cart à¶‘à¶šà¶§ Add", outOfStock:"Out of Stock", inStock:"In Stock",
    rewardPoints:"Reward Points", emptyCart:"Cart à¶‘à¶š à·„à·’à·ƒà·Š.", requestedItem:"Requested item â€¢ Price confirm à·€à·š",
    mayApply:"Apply à·€à·’à¶º à·„à·à¶š", deliverySelected:"Delivery selected. Full address à·ƒà·„ postcode à¶‡à¶­à·”à¶½à¶­à·Š à¶šà¶»à¶±à·Šà¶±. Delivery charge WhatsApp à·„à¶»à·„à· confirm à·€à·š."
  },
  ml: {
    restaurant:"à´±àµ†à´¸àµà´±àµà´±àµ‹à´±à´¨àµà´±àµ", grocery:"à´—àµà´°àµ‹à´¸à´±à´¿", search:"à´¤à´¿à´°à´¯àµà´•", searchPlaceholder:"à´‰àµ½à´ªàµà´ªà´¨àµà´¨à´™àµà´™àµ¾, à´¬àµà´°à´¾àµ»à´¡àµà´•àµ¾ à´¤à´¿à´°à´¯àµà´•...",
    mostOrdered:"à´ˆ à´†à´´àµà´š à´•àµ‚à´Ÿàµà´¤àµ½ à´“àµ¼à´¡àµ¼ à´šàµ†à´¯àµà´¤à´¤àµ", specialOffers:"à´¸àµà´ªàµ†à´·àµà´¯àµ½ à´“à´«à´±àµà´•àµ¾", offersNote:"Discount products à´®à´¾à´¤àµà´°à´‚ à´‡à´µà´¿à´Ÿàµ† à´•à´¾à´£à´¿à´•àµà´•àµà´‚.",
    allProducts:"à´Žà´²àµà´²à´¾ à´‰àµ½à´ªàµà´ªà´¨àµà´¨à´™àµà´™à´³àµà´‚", allCategories:"à´Žà´²àµà´²à´¾ à´µà´¿à´­à´¾à´—à´™àµà´™à´³àµà´‚", rewardsShop:"Rewards", rewardsText:"Â£1 spend = 10 points. Free products redeem à´šàµ†à´¯àµà´¯à´¾à´‚.",
    cantFind:"à´†à´µà´¶àµà´¯à´®à´¾à´¯ item à´•à´¿à´Ÿàµà´Ÿà´¿à´¯à´¿à´²àµà´²àµ‡?", requestText:"Item name type à´šàµ†à´¯àµà´¤àµ cart-àµ½ add à´šàµ†à´¯àµà´¯àµà´•. Price WhatsApp-àµ½ confirm à´šàµ†à´¯àµà´¯àµà´‚.",
    requestPlaceholder:"à´‰à´¦à´¾: MTR Rava Idli Mix", addRequest:"Request Cart-àµ½ Add à´šàµ†à´¯àµà´¯àµà´•", yourCart:"à´¨à´¿à´™àµà´™à´³àµà´Ÿàµ† Cart", subtotal:"Subtotal",
    checkout:"Checkout", collection:"Collection", delivery:"Delivery", deliveryInfo:"Delivery à´µà´¿à´µà´°à´‚",
    deliveryNotice:"Delivery charge apply à´†à´•à´¾à´‚. Order review à´šàµ†à´¯àµà´¤ à´¶àµ‡à´·à´‚ WhatsApp-àµ½ charge/time confirm à´šàµ†à´¯àµà´¯àµà´‚.",
    collectionInfo:"Collection à´µà´¿à´µà´°à´‚", collectionPoint:"Collection Point:", collectionHours:"Collection Hours:",
    timingNote:"Order à´šàµ†à´¯àµà´¤ à´¶àµ‡à´·à´‚ collection/delivery time WhatsApp-àµ½ confirm à´šàµ†à´¯àµà´¯àµà´‚.",
    customerName:"Customer name", postcode:"Delivery postcode e.g. BL3 4AZ", whatsappNumber:"Customer WhatsApp number",
    address:"Postcode à´‰àµ¾à´ªàµà´ªàµ†à´Ÿàµ† full delivery address", paymentMethod:"Payment Method", cash:"Cash", card:"Card", bankTransfer:"Bank Transfer",
    notes:"Customer notes optional", total:"Total", sendWhatsapp:"Order WhatsApp-à´²àµ‡à´•àµà´•àµ à´…à´¯à´¯àµà´•àµà´•àµà´•", home:"Home", products:"Products", rewards:"Rewards", cart:"Cart",
    add:"Add", out:"Out", addOffer:"Offer Add", addToCart:"Cart-àµ½ Add", outOfStock:"Out of Stock", inStock:"In Stock",
    rewardPoints:"Reward Points", emptyCart:"Cart à´•à´¾à´²à´¿à´¯à´¾à´£àµ.", requestedItem:"Requested item â€¢ Price confirm à´šàµ†à´¯àµà´¯àµà´‚",
    mayApply:"Apply à´†à´•à´¾à´‚", deliverySelected:"Delivery selected. Full address and postcode enter à´šàµ†à´¯àµà´¯àµà´•. Delivery charge WhatsApp-àµ½ confirm à´šàµ†à´¯àµà´¯àµà´‚."
  },
  te: {
    restaurant:"à°°à±†à°¸à±à°Ÿà°¾à°°à±†à°‚à°Ÿà±", grocery:"à°—à±à°°à±‹à°¸à°°à±€", search:"à°µà±†à°¤à°•à°‚à°¡à°¿", searchPlaceholder:"à°ªà±à°°à±Šà°¡à°•à±à°Ÿà±à°¸à±, à°¬à±à°°à°¾à°‚à°¡à±à°¸à± à°µà±†à°¤à°•à°‚à°¡à°¿...",
    mostOrdered:"à°ˆ à°µà°¾à°°à°‚ à°Žà°•à±à°•à±à°µà°—à°¾ à°†à°°à±à°¡à°°à± à°šà±‡à°¸à°¿à°¨à°µà°¿", specialOffers:"à°¸à±à°ªà±†à°·à°²à± à°†à°«à°°à±à°¸à±", offersNote:"Discount products à°®à°¾à°¤à±à°°à°®à±‡ à°‡à°•à±à°•à°¡ à°•à°¨à°¿à°ªà°¿à°¸à±à°¤à°¾à°¯à°¿.",
    allProducts:"à°…à°¨à±à°¨à°¿ à°ªà±à°°à±Šà°¡à°•à±à°Ÿà±à°¸à±", allCategories:"à°…à°¨à±à°¨à°¿ à°•à±‡à°Ÿà°—à°¿à°°à±€à°²à±", rewardsShop:"Rewards", rewardsText:"Â£1 spend = 10 points. Free products redeem à°šà±‡à°¯à°‚à°¡à°¿.",
    cantFind:"à°®à±€à°•à± à°•à°¾à°µà°¾à°²à±à°¸à°¿à°¨ item à°¦à±Šà°°à°•à°²à±‡à°¦à°¾?", requestText:"Item name type à°šà±‡à°¸à°¿ cart à°²à±‹ add à°šà±‡à°¯à°‚à°¡à°¿. Price WhatsApp à°²à±‹ confirm à°šà±‡à°¸à±à°¤à°¾à°®à±.",
    requestPlaceholder:"à°‰à°¦à°¾: MTR Rava Idli Mix", addRequest:"Request Cart à°²à±‹ Add à°šà±‡à°¯à°‚à°¡à°¿", yourCart:"à°®à±€ Cart", subtotal:"Subtotal",
    checkout:"Checkout", collection:"Collection", delivery:"Delivery", deliveryInfo:"Delivery à°¸à°®à°¾à°šà°¾à°°à°‚",
    deliveryNotice:"Delivery charge apply à°•à°¾à°µà°šà±à°šà±. Order review à°¤à°°à±à°µà°¾à°¤ WhatsApp à°²à±‹ charge/time confirm à°šà±‡à°¸à±à°¤à°¾à°®à±.",
    collectionInfo:"Collection à°¸à°®à°¾à°šà°¾à°°à°‚", collectionPoint:"Collection Point:", collectionHours:"Collection Hours:",
    timingNote:"Order à°šà±‡à°¸à°¿à°¨ à°¤à°°à±à°µà°¾à°¤ collection/delivery time WhatsApp à°²à±‹ confirm à°šà±‡à°¸à±à°¤à°¾à°®à±.",
    customerName:"Customer name", postcode:"Delivery postcode e.g. BL3 4AZ", whatsappNumber:"Customer WhatsApp number",
    address:"Postcode à°¤à±‹ full delivery address", paymentMethod:"Payment Method", cash:"Cash", card:"Card", bankTransfer:"Bank Transfer",
    notes:"Customer notes optional", total:"Total", sendWhatsapp:"Order WhatsApp à°•à°¿ à°ªà°‚à°ªà°‚à°¡à°¿", home:"Home", products:"Products", rewards:"Rewards", cart:"Cart",
    add:"Add", out:"Out", addOffer:"Offer Add", addToCart:"Cart à°²à±‹ Add", outOfStock:"Out of Stock", inStock:"In Stock",
    rewardPoints:"Reward Points", emptyCart:"à°®à±€ cart à°–à°¾à°³à±€à°—à°¾ à°‰à°‚à°¦à°¿.", requestedItem:"Requested item â€¢ Price confirm à°šà±‡à°¸à±à°¤à°¾à°®à±",
    mayApply:"Apply à°•à°¾à°µà°šà±à°šà±", deliverySelected:"Delivery selected. Full address and postcode enter à°šà±‡à°¯à°‚à°¡à°¿. Delivery charge WhatsApp à°²à±‹ confirm à°šà±‡à°¸à±à°¤à°¾à°®à±."
  }
};

function tr(key){
  return (I18N[currentLanguage] && I18N[currentLanguage][key]) || I18N.en[key] || key;
}

function setLanguage(lang){
  currentLanguage = I18N[lang] ? lang : "en";
  localStorage.setItem("ce_language", currentLanguage);
  applyLanguage();
  renderMostOrdered();
  renderSpecialOffers();
  renderOfferSlider();
  renderProducts();
  renderTopSearchResults();
  if(document.getElementById("cartDrawer").classList.contains("open")) renderCart();
}

function applyLanguage(){
  const select = document.getElementById("languageSelect");
  if(select) select.value = currentLanguage;
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = tr(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => { el.placeholder = tr(el.dataset.i18nPlaceholder); });

  const catButtons = document.querySelectorAll(".category-strip button");
  if(catButtons[0]) catButtons[0].innerHTML = `Ã°Å¸Ââ€º ${tr("restaurant")}`;
  if(catButtons[1]) catButtons[1].innerHTML = `Ã°Å¸â€ºâ€™ ${tr("grocery")}`;

  const sectionTitles = document.querySelectorAll(".section-title h2");
  if(sectionTitles[0]) sectionTitles[0].innerHTML = `Ã°Å¸â€Â¥ ${tr("mostOrdered")}`;
  const offerTitle = document.querySelector(".offers-section h2");
  if(offerTitle) offerTitle.innerHTML = `Ã°Å¸ÂÂ·Ã¯Â¸Â ${tr("specialOffers")}`;
  const rewardsTitle = document.querySelector(".rewards h2");
  if(rewardsTitle) rewardsTitle.innerHTML = `Ã°Å¸Å½Â ${tr("rewardsShop")}`;

  const requestTitle = document.querySelector(".request-box h2");
  if(requestTitle) requestTitle.textContent = tr("cantFind");
  const requestText = document.querySelector(".request-box p");
  if(requestText) requestText.textContent = tr("requestText");
  const requestButton = document.querySelector(".request-box button");
  if(requestButton) requestButton.textContent = tr("addRequest");

  const cartTitle = document.querySelector(".cart-header h2");
  if(cartTitle) cartTitle.textContent = tr("yourCart");
  const checkoutTitle = document.querySelector(".checkout h3");
  if(checkoutTitle) checkoutTitle.textContent = tr("checkout");
  const checkoutLabels = document.querySelectorAll(".checkout label");
  if(checkoutLabels[0]) checkoutLabels[0].lastChild.textContent = ` ${tr("collection")}`;
  if(checkoutLabels[1]) checkoutLabels[1].lastChild.textContent = ` ${tr("delivery")}`;

  const deliveryInfo = document.querySelector("#deliveryNoticeBox");
  if(deliveryInfo) deliveryInfo.innerHTML = `<b>Ã°Å¸Å¡Å¡ ${tr("deliveryInfo")}</b><br>${tr("deliveryNotice")}`;
  const collectionBox = document.querySelector(".collection-info-box");
  if(collectionBox){
    collectionBox.innerHTML = `<h4>Ã°Å¸â€œÂ¦ ${tr("collectionInfo")}</h4>
      <p><b>${tr("collectionPoint")}</b><br>203 Willows Lane, Bolton, BL3 4AZ</p>
      <p><b>${tr("collectionHours")}</b><br>Tuesday Ã¢â‚¬â€œ Sunday: 11:00 AM Ã¢â‚¬â€œ 9:00 PM<br>Monday: Closed</p>
      <p>${tr("timingNote")}</p>`;
  }
  const paymentTitle = document.querySelector(".payment-box h4");
  if(paymentTitle) paymentTitle.textContent = tr("paymentMethod");
  const paymentLabels = document.querySelectorAll(".payment-box label");
  if(paymentLabels[0]) paymentLabels[0].lastChild.textContent = ` ${tr("cash")}`;
  if(paymentLabels[1]) paymentLabels[1].lastChild.textContent = ` ${tr("card")}`;
  if(paymentLabels[2]) paymentLabels[2].lastChild.textContent = ` ${tr("bankTransfer")}`;
  const categoryFilter = document.getElementById("categoryFilter");
  if(categoryFilter && categoryFilter.options[0]) categoryFilter.options[0].textContent = tr("allCategories");

  const subtotalValue = document.getElementById("subtotal");
  const subtotalWrap = subtotalValue && subtotalValue.parentElement;
  if(subtotalWrap) subtotalWrap.innerHTML = `${tr("subtotal")}: <b id="subtotal">${subtotalValue.textContent}</b>`;
  const deliveryCharge = document.getElementById("deliveryCharge");
  const deliveryWrap = deliveryCharge && deliveryCharge.parentElement;
  if(deliveryWrap) deliveryWrap.innerHTML = `${tr("delivery")}: <b id="deliveryCharge">${deliveryCharge.textContent}</b>`;
  const totalValue = document.getElementById("total");
  const totalWrap = totalValue && totalValue.parentElement;
  if(totalWrap) totalWrap.innerHTML = `${tr("total")}: <b id="total">${totalValue.textContent}</b>`;

  const customerName = document.getElementById("customerName");
  if(customerName) customerName.placeholder = tr("customerName");
  const postcode = document.getElementById("postcode");
  if(postcode) postcode.placeholder = tr("postcode");
  const whatsappNumber = document.getElementById("whatsappNumber");
  if(whatsappNumber) whatsappNumber.placeholder = tr("whatsappNumber");
  const address = document.getElementById("address");
  if(address) address.placeholder = tr("address");
  const notes = document.getElementById("notes");
  if(notes) notes.placeholder = tr("notes");
  const whatsappBtn = document.querySelector(".whatsapp-btn");
  if(whatsappBtn) whatsappBtn.textContent = tr("sendWhatsapp");

  const navLabels = document.querySelectorAll(".bottom-nav button");
  if(navLabels[0]) navLabels[0].innerHTML = `Ã°Å¸ÂÂ <br>${tr("home")}`;
  if(navLabels[1]) navLabels[1].innerHTML = `Ã¢â€“Â¦<br>${tr("products")}`;
  if(navLabels[2]) navLabels[2].innerHTML = `Ã°Å¸Å½Â<br>${tr("rewards")}`;
  if(navLabels[3]) navLabels[3].innerHTML = `Ã°Å¸â€ºâ€™<br>${tr("cart")}`;
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

function money(v){ return "Â£" + Number(v || 0).toFixed(2); }
function save(){ 
  localStorage.setItem("ce_cart", JSON.stringify(cart)); 
  localStorage.setItem("ce_requested_cart", JSON.stringify(requestedCart));
  updateCartCount(); 
}
function priceOf(p){ return p.offer_price || p.price; }
function categories(){ return ["All", ...new Set(PRODUCTS.map(p=>p.category))]; }

function init(){
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
  applyLanguage();
}
function iconFor(c){
  if(c.includes("Restaurant")) return "ðŸ›";
  if(c.includes("Grocery")) return "ðŸ›’";
  if(c.includes("Household")) return "ðŸ ";
  if(c.includes("Pooja")) return "ðŸ•‰ï¸";
  return "ðŸ›ï¸";
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
  return normaliseText([p.name,p.category,p.subcategory,p.brand,p.description,p.pack].join(" "));
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
  const qtyControl = disabled 
    ? `<button class="add" disabled>${tr("out")}</button>`
    : qty > 0 
      ? `<div class="inline-qty"><button onclick="event.stopPropagation(); changeQty(${p.id},-1)">âˆ’</button><b>${qty}</b><button onclick="event.stopPropagation(); addToCart(${p.id})">+</button></div>`
      : `<button class="add" onclick="event.stopPropagation(); addToCart(${p.id})">${tr("add")}</button>`;
  return `<div class="product-card ${disabled?'out':''} ${qty>0?'selected':''}">
    ${p.badge?`<div class="badge">${p.badge}</div>`:""}
    ${qty>0?`<div class="added-pill">âœ“ ${qty}</div>`:""}
    <img class="product-img clickable" src="${p.image}" alt="${p.name}" onclick="openProductPage(${p.id})">
    <div class="name clickable" onclick="openProductPage(${p.id})">${p.name}</div>
    <div class="sub">${p.description || p.subcategory}</div>
    <div class="pack">${p.subcategory} â€¢ ${p.pack}</div>
    <div class="price-line"><span class="price">${money(priceOf(p))}</span>${old}</div>
    ${qtyControl}
  </div>`;
}

function renderMostOrdered(){
  document.getElementById("mostOrdered").innerHTML = PRODUCTS.slice(0,6).map(card).join("");
}

function offerCard(p){
  return `<div class="offer-product-card">
    <img src="${p.image}" alt="${p.name}">
    <div>
      <b>${p.name}</b>
      <p>${p.description || ""}</p>
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
    box.innerHTML = `<div class="slide active"><h2>ðŸ·ï¸ Special Offer</h2><p>New offers coming soon.</p></div>`;
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
      <b>No item found for â€œ${rawQ}â€</b>
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
    <div><b class="clickable" onclick="openProductPage(${p.id})">${p.name}</b><br><small>${p.subcategory} â€¢ ${p.pack}</small><br><span>${money(priceOf(p))}</span></div>
    ${qty>0 ? `<div class="mini-qty"><button onclick="changeQty(${p.id},-1)">âˆ’</button><b>${qty}</b><button onclick="addToCart(${p.id})">+</button></div>` : `<button onclick="addToCart(${p.id})">${tr("add")}</button>`}
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
      âœ… <b>${q}</b> has been added to your cart as a requested item.<br>
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
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p || p.stock !== "In Stock") return;
  cart[id] = (cart[id] || 0) + 1;
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
  const p = PRODUCTS.find(x=>x.id===id);
  cart[id] = (cart[id] || 0) + delta;
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
    <b>ðŸŽ Your Reward Points</b>
    <div>Points from this order: <b>${earned}</b></div>
    <div>Already used: <b>${used}</b></div>
    <div>Available to claim now: <b>${available}</b></div>
  </div>`;

  if(claimedRewards.length){
    html += `<h4>âœ… Claimed Free Items</h4>`;
    html += claimedRewards.map(r=>`<div class="claimed-reward">
      <span>${r.emoji} ${r.name}<br><small>${r.points} points used</small></span>
      <button onclick="removeReward('${r.id}')">Remove</button>
    </div>`).join("");
  }

  html += `<h4>ðŸŽ You Can Claim Now</h4>`;
  if(claimable.length){
    html += claimable.map(r=>`<div class="reward-option">
      <div><b>${r.emoji} ${r.name}</b><br><small>${r.points} points required</small></div>
      <button onclick="claimReward('${r.id}')">Claim</button>
    </div>`).join("");
  }else{
    html += `<div class="reward-info">No free item available yet. Keep adding products to unlock rewards.</div>`;
  }

  html += `<h4>ðŸ”“ Next Rewards</h4>`;
  if(nextRewards.length){
    html += nextRewards.map(r=>{
      const need = Math.max(0, r.points - available);
      const spendNeed = Math.ceil(need / 10);
      return `<div class="reward-option locked">
        <div><b>${r.emoji} ${r.name}</b><br><small>Need ${need} more points / approx Â£${spendNeed} more spend</small></div>
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
    <div class="reward-summary-title">ðŸŽ Free Gift Rewards</div>
    <div class="reward-line"><span>Total points from this order</span><b>${earned}</b></div>
    <div class="reward-line"><span>Points used for gifts</span><b>${used}</b></div>
    <div class="reward-line strong"><span>Points remaining</span><b>${available}</b></div>
  `;

  if(claimedRewards.length){
    html += `<h4>âœ… Claimed Free Gifts</h4>`;
    html += `<div class="claimed-gift-grid">`;
    html += claimedRewards.map(r=>`<div class="claimed-gift-card">
      <img src="${r.image}" alt="${r.name}">
      <div><b>${r.name}</b><br><small>${r.points} points used</small></div>
      <button onclick="removeReward('${r.claimId}')">Remove</button>
    </div>`).join("");
    html += `</div>`;
  }

  html += `<h4>ðŸŽ Choose Free Gifts</h4>
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
      <div><b>Next Gift</b><br><span>${next.name}</span><br><small>Need ${need} more points / approx Â£${spendNeed} more spend</small></div>
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
      <span>${available >= r.points ? 'âœ…' : 'ðŸ”’'} ${r.points} pts</span><span>${r.emoji} ${r.name}</span>
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
    <div><b>${r.name}</b><br><small>Requested item â€¢ Price to be confirmed</small></div>
    <button class="remove-request" onclick="removeRequestedItem(${i})">Remove</button>
  </div>`).join("");

  const rewardHtml = claimedRewards.map(r=>`<div class="cart-item reward-cart-item">
    <img class="mini-img" src="${r.image}" alt="${r.name}">
    <div><b>${r.name}</b><br><small>Free gift â€¢ ${r.points} points used</small></div>
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
      msg += `ðŸ•’ Collection hours: Tuesday â€“ Sunday 11:00 AM â€“ 9:00 PM. Monday Closed.\n`;
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
  const words = normaliseText([p.name, p.subcategory, p.description].join(" ")).split(" ").filter(w=>w.length>3);
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
  modal.innerHTML = `
    <div class="product-detail" id="productDetailContent">
      <div class="detail-header">
        <button onclick="closeProductPage()">â† Back</button>
        <button onclick="closeProductPage()">âœ•</button>
      </div>
      <img class="detail-img" src="${p.image}" alt="${p.name}">
      ${p.badge ? `<div class="detail-badge">${p.badge}</div>` : ""}
      <h1>${p.name}</h1>
      <p class="detail-category">${p.category} â€¢ ${p.subcategory} â€¢ ${p.pack}</p>
      <div class="detail-price">${old}<span>${money(priceOf(p))}</span></div>
      <p class="detail-stock">${p.stock === "In Stock" ? "âœ… In Stock" : "âŒ Out of Stock"}</p>
      <p class="detail-desc">${p.description || ""}</p>
      <div class="detail-actions">
        ${p.stock !== "In Stock" 
          ? `<button class="disabled-detail" disabled>${tr("outOfStock")}</button>`
          : qty > 0
            ? `<div class="detail-qty"><button onclick="changeQty(${p.id},-1); refreshProductPageTop(${p.id})">âˆ’</button><b>${qty}</b><button onclick="addToCart(${p.id}); refreshProductPageTop(${p.id})">+</button></div>`
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
      ${qty>0?`<div class="related-added">âœ“ ${qty}</div>`:""}
      <img src="${r.image}" onclick="openProductPageFromRelated(${r.id})">
      <b onclick="openProductPageFromRelated(${r.id})">${r.name}</b>
      <span>${money(priceOf(r))}</span>
      ${qty>0 
        ? `<div class="related-qty">
            <button onclick="event.stopPropagation(); window.recentRelatedAddedId=${r.id}; changeQty(${r.id},-1); refreshProductPageKeepRelated(window.currentProductDetailId)">âˆ’</button>
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
    <button onclick="setCategory('Restaurant Food'); toggleMenu()">ðŸ› Restaurant Food</button>
    <button onclick="setCategory('Grocery'); toggleMenu()">ðŸ›’ Grocery</button>
    <button onclick="scrollToOffers(); toggleMenu()">ðŸ·ï¸ Offers</button>
    <button onclick="scrollToRewards(); toggleMenu()">ðŸŽ Rewards</button>
    <button onclick="document.querySelector('.request-box').scrollIntoView({behavior:'smooth'}); toggleMenu()">ðŸ”Ž Request Item</button>
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

