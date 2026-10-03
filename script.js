const products = [
 {id:1,name:"Pneumatic Impact Wrench",brand:"Chicago Pneumatic · CP",category:"Tools",price:"₹4,000–₹18,000",desc:"High-torque fastening for workshop and industrial use.",tag:"POPULAR",img:"https://images.unsplash.com/photo-1581147036324-c1c89c2c8b5c?auto=format&fit=crop&w=700&q=80"},
 {id:2,name:"Air Compressor",brand:"ELGi · Kirloskar",category:"Air",price:"₹12,000–₹1,50,000+",desc:"Reliable compressed-air supply for tools and machinery.",tag:"CORE RANGE",img:"https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80"},
 {id:3,name:"Pneumatic Die Grinder",brand:"IR · CP",category:"Tools",price:"₹2,500–₹12,000",desc:"Compact tool for grinding, deburring and finishing.",tag:"WORKSHOP",img:"https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=700&q=80"},
 {id:4,name:"Air Impact Ratchet",brand:"IR · Blue Point",category:"Tools",price:"₹3,500–₹14,000",desc:"Access-friendly fastening for maintenance work.",tag:"PRECISION",img:"https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=700&q=80"},
 {id:5,name:"Pneumatic Spray Gun",brand:"ESAR · Professional",category:"Tools",price:"₹900–₹8,000",desc:"For coating, painting and finishing applications.",tag:"FINISHING",img:"https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=700&q=80"},
 {id:6,name:"Air Filter Regulator Lubricator",brand:"Industrial range",category:"Components",price:"₹650–₹6,500",desc:"Helps condition and regulate compressed air.",tag:"AIR PREP",img:"https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=80"},
 {id:7,name:"Pneumatic Cylinder",brand:"Industrial range",category:"Components",price:"₹800–₹15,000+",desc:"Linear actuation options for automation systems.",tag:"AUTOMATION",img:"https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=700&q=80"},
 {id:8,name:"Air Hose & Quick Couplers",brand:"Industrial range",category:"Components",price:"₹150–₹3,500",desc:"Hoses, connectors and couplings for air lines.",tag:"ACCESSORIES",img:"https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=700&q=80"}
];
let activeFilter="All", cart=[];
const grid=document.getElementById("product-grid");
function renderProducts(){
 const q=document.getElementById("search").value.toLowerCase().trim();
 const shown=products.filter(p=>(activeFilter==="All"||p.category===activeFilter)&&(`${p.name} ${p.brand} ${p.desc}`).toLowerCase().includes(q));
 grid.innerHTML=shown.map(p=>`<article class="product-card"><div class="product-photo"><img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(135deg,#dce8f5,#a9c1dc)'"><span class="product-tag">${p.tag}</span></div><div class="product-info"><div class="product-brand">${p.brand}</div><h3>${p.name}</h3><p>${p.desc}</p><div class="product-bottom"><div class="price">${p.price}<small>Indicative price range</small></div><button class="add-btn" onclick="addToCart(${p.id})">＋ Add to cart</button></div></div></article>`).join("")||'<p>No products match your search. Contact us for help finding a model.</p>';
}
document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");activeFilter=b.dataset.filter;renderProducts()}));
document.getElementById("search").addEventListener("input",renderProducts);
function addToCart(id){const item=cart.find(x=>x.id===id);if(item)item.qty++;else cart.push({id,qty:1});updateCart();showToast("Added to cart");}
function updateCart(){
 document.getElementById("cart-count").textContent=cart.reduce((n,x)=>n+x.qty,0);
 const el=document.getElementById("cart-items");
 if(!cart.length){el.innerHTML='<div class="empty-cart">Your cart is empty.<br><small>Add a product to get started.</small></div>';return}
 el.innerHTML=cart.map(x=>{const p=products.find(p=>p.id===x.id);return `<div class="cart-item"><div><strong>${p.name}</strong><small>${p.brand} · ${p.price}</small><div class="qty"><button onclick="changeQty(${p.id},-1)">−</button><span>${x.qty}</span><button onclick="changeQty(${p.id},1)">＋</button></div></div><button class="remove" onclick="removeItem(${p.id})">Remove</button></div>`}).join("");
}
function changeQty(id,d){const x=cart.find(x=>x.id===id);if(x)x.qty+=d;cart=cart.filter(x=>x.qty>0);updateCart()}
function removeItem(id){cart=cart.filter(x=>x.id!==id);updateCart()}
function toggleCart(){document.getElementById("cart-overlay").classList.toggle("open")}
function checkout(){
 if(!cart.length){showToast("Add a product to your cart first");return}
 const lines=cart.map(x=>{const p=products.find(p=>p.id===x.id);return `• ${p.name} (${p.brand}) x ${x.qty} — listed range ${p.price}`});
 const message=`Hello Neha Enterprises, I would like to enquire/order these products:\n\n${lines.join("\n")}\n\nPlease confirm exact model, stock, final price and delivery.`;
 window.open("https://wa.me/918890034736?text="+encodeURIComponent(message),"_blank","noopener");
}
let toastTimer;function showToast(t){const el=document.getElementById("toast");el.textContent=t;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),1800)}
renderProducts();