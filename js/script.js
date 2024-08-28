

      const header = document.querySelector("header");
      const hamburgerBtn = document.querySelector("#hamburger-btn");
      const closeMenuBtn = document.querySelector("#close-menu-btn");

      // Toggle mobile menu on hamburger button click
      hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

      // Close mobile menu on close button click
      closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());

      // script.js
      document.addEventListener('scroll', function() {
      const rect = header.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
      if (rect.top >= windowHeight && rect.bottom <= 0) {
          header.classList.remove('visible');
      } else {
          header.classList.add('visible');
      }
  });


      // Animation image
      document.addEventListener('scroll', function() {
      const images = document.querySelectorAll('.kitchen,.kitchen1');
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      images.forEach(function(image){
      const rect = image.getBoundingClientRect();
      
      if (rect.top <= windowHeight && rect.bottom >= 0) {
          image.classList.add('visible');
      } else {
          image.classList.remove('visible');
      }
    });
      
  });

  // Header Background 
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.img1');

    images.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.1)';
        });

        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
        });
    });
});
// Order Cart Show & Remove
const cartOpen = document.querySelector('.icon');
const cartContainer = document.querySelector('.cart-container');
const amountOrder = document.querySelector('.amount-order');
   
            cartOpen.addEventListener('click', ()=>{
            cartContainer.classList.toggle('show');
            cartOpen.classList.toggle('show');
            
            amountOrder.classList.toggle('show');
            cartOpen.classList.toggle('show');
        });


// Add item and Checkout
document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.querySelector('.cart-icon');
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout');
    let totalPrice = 0;

    let cart = {};

    document.querySelectorAll('.add-cart').forEach(button => {
        button.addEventListener('click', () => {
            const itemName = button.getAttribute('data-name');
            const itemPrice = parseFloat(button.getAttribute('data-price'));

            if (cart[itemName]) {
                cart[itemName].quantity += 1;
            } else {
                cart[itemName] = {
                    price: itemPrice,
                    quantity: 1
                };
            }

            updateCart();
        });
    });

   

    function updateCart() {
        cartItems.innerHTML = '';
        totalPrice = 0;

        for (const [itemName, itemDetails] of Object.entries(cart)) {
            const listItem = document.createElement('li');
            listItem.textContent = `${itemName} - Php${itemDetails.price.toFixed(2)} X ${itemDetails.quantity}`;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                if (itemDetails.quantity > 1) {
                    itemDetails.quantity -= 1;
                } else {
                    delete cart[itemName];
                }
                updateCart();
            });

            listItem.appendChild(removeButton);
            cartItems.appendChild(listItem);

            totalPrice += itemDetails.price * itemDetails.quantity;
        }

        totalPriceElement.textContent = totalPrice.toFixed(2);
    }


    
    checkoutButton.addEventListener('click', () => {
        if (totalPrice > 0) {
            alert(`Your total is Php${totalPrice.toFixed(2)}. Thank you for your purchase!`);
            cartItems.innerHTML = '';
            totalPrice = 0;
            totalPriceElement.textContent = totalPrice.toFixed(2);
            for (const itemName in cart) {
                delete cart[itemName];
            }
        } else {
            alert('Your cart is empty!');
        }
    });
});

// Contact Section
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    
    if (name === '' || email === '' || subject === '' || message === '') {
        displayMessage('All fields are required.', 'error');
        return;
    }
    
    if (!validateEmail(email)) {
        displayMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    displayMessage('Thank you for contacting us!', 'success');
});


// Contact Section
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

function displayMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.className = type;
}

