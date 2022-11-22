// ************************************************
// Shopping Cart API
// ************************************************

var shoppingCart = (function() {
    // =============================
    // Private methods and propeties
    // =============================
    cart = [];
    
    // Constructor
    function Item(name, price, count,pic) {
      this.name = name;
      this.price = price;
      this.count = count;
      this.pic=pic;
    }
    
    // Save cart
    function saveCart() {
      localStorage.setItem('shoppingCart', JSON.stringify(cart));
    }
    
      // Load cart
    function loadCart() {
      cart = JSON.parse(localStorage.getItem('shoppingCart'));
    }
	
	
    if (localStorage.getItem("shoppingCart") != null) {
      loadCart();
    }
    
  
    // =============================
    // Public methods and propeties
    // =============================
    var obj = {};
    
    // Add to cart
    obj.addItemToCart = function(name, price, count,pic) {
      for(var i in cart) {
        if(cart[i].name === name) {
          cart[i].count ++;
          saveCart();
          return;
        }
      }
      var item = new Item(name, price, count,pic);
      cart.push(item);
      saveCart();
    }
    // Set count from item
    obj.setCountForItem = function(name, count) {
      for(var i in cart) {
        if (cart[i].name === name) {
          cart[i].count = count;
          break;
        }
      }
    };
    // Remove item from cart
    obj.removeItemFromCart = function(name) {
        for(var i in cart) {
          if(cart[i].name === name) {
            cart[i].count --;
            if(cart[i].count === 0) {
              cart.splice(i, 1);
            }
            break;
          }
      }
      saveCart();
    }
  
    // Remove all items from cart
    obj.removeItemFromCartAll = function(name) {
      for(var i in cart) {
        if(cart[i].name === name) {
          cart.splice(i, 1);
          break;
        }
      }
      saveCart();
    }
  
    // Clear cart
    obj.clearCart = function() {
      cart = [];
      saveCart();
    }
  
    // Count cart 
    obj.totalCount = function() {
      var totalCount = 0;
      for(var i in cart) {
        totalCount += cart[i].count;
      }
      return totalCount;
    }
  
    // Total cart
    obj.totalCart = function() {
      var totalCart = 0;
      for(var i in cart) {
        totalCart += cart[i].price * cart[i].count;
      }
      return Number(totalCart).toFixed(2);
    }

    //Ship Fee
    obj.shipFee=function(){
      var shipFee=0;
      for(var i in cart){
        shipFee+=cart[i].price * cart[i].count * 1/100;
      }
      return Number(shipFee).toFixed(2);
    }

    //Tax
    obj.tax=function(){
      var tax=0;
      for(var i in cart){
        tax+=cart[i].price * cart[i].count * 10/100;
      }
      return Number(tax).toFixed(2);
    }
    //total tong
    obj.totaltong=function(){
      var totaltong=0;
      for(var i in cart){
        totaltong+=(cart[i].price * cart[i].count * 10/100)+(cart[i].price * cart[i].count * 1/100)+(cart[i].price * cart[i].count);}
      return Number(totaltong).toFixed(2);
    }
  
    // List cart
    obj.listCart = function() {
      var cartCopy = [];
      for(i in cart) {
        item = cart[i];
        itemCopy = {};
        for(p in item) {
          itemCopy[p] = item[p];
  
        }
        itemCopy.total = Number(item.price * item.count);
        cartCopy.push(itemCopy)
      }
      return cartCopy;
    }
  
    // cart : Array
    // Item : Object/Class
    // addItemToCart : Function
    // removeItemFromCart : Function
    // removeItemFromCartAll : Function
    // clearCart : Function
    // countCart : Function
    // totalCart : Function
    // listCart : Function
    // saveCart : Function
    // loadCart : Function
    return obj;
  })();
  
  
  // *****************************************
  // Triggers / Events
  // ***************************************** 
  // Add item
  $('.add-to-cart').click(function(event) {
    event.preventDefault();
    var name = $(this).data('name');
    var price = Number($(this).data('price'));
    var pic= $(this).data('pic');
    shoppingCart.addItemToCart(name, price, 1,pic);
    displayCart();
  });
  
  // Clear items
  $('.clear-cart').click(function() {
    shoppingCart.clearCart();
    displayCart();
  });
  
  
  function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = `<tr>
                    <th>Pic</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th> </th>
                    <th>Total</th>
                  </tr>`;
		var summary=`<tr>
    <th>Name</th>
  
    <th>Quantity</th>
    <th> </th>
    <th>Total</th>
  </tr>`;
	  $.each(cartArray, function (k, v) {

		  output += `<tr>
                <td><img src="../IMAGE/${v.pic}" style="width:50%"></td>
                <td>${v.name.toUpperCase()}</td>
                <td>${v.price}</td>
                <td><div class='input-group'><span class='minus-item input-group-addon btn btn-primary' data-name="${v.name}">-</span>
                    <input type='number' class='item-count form-control' data-name="${v.name}" value="${v.count}">
                    <span class='plus-item input-group-addon btn btn-primary' data-name="${v.name}">+</span></div></td>
                <td><button class='delete-item btn btn-danger' data-name="${v.name}">X</button></td>
                <td>${v.total}</td>
                </tr>`

                
      summary +=`<tr>
      <th>${v.name.toUpperCase()}</th>
    
      <th>${v.count}</th>
      <th> </th>
      <th>${v.total}</th>
    </tr>
    `

    });
    /*for(var i in cartArray) {
      output += `<tr>
                <td>${cartArray[i].name.toUpperCase()}</td>
                <td>${cartArray[i].price}</td>
                <td><div class='input-group'><span class='minus-item input-group-addon btn btn-primary' data-name="${cartArray[i].name}">-</span>
                    <input type='number' class='item-count form-control' data-name="${cartArray[i].name}" value="${cartArray[i].count}">
                    <span class='plus-item input-group-addon btn btn-primary' data-name="${cartArray[i].name}">+</span></div></td>
                <td><button class='delete-item btn btn-danger' data-name="${cartArray[i].name}">X</button></td>
                <td>${cartArray[i].total}</td>
                </tr>`
    }*/
    $('.show-cart').html(output);
    $('.show-ordersummary').html(summary);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
    $('.ship-fee').html(shoppingCart.shipFee);
    $('.tax-fee').html(shoppingCart.tax);
    $('.total-tong').html(shoppingCart.totaltong);
  }
  
  // Delete item button
  $('.show-cart').on("click", ".delete-item", function(event) {
    var name = $(this).data('name');
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
  })
  
  
  // -1
  $('.show-cart').on("click", ".minus-item", function(event) {
    var name = $(this).data('name');
    shoppingCart.removeItemFromCart(name);
    displayCart();
  })
  // +1
  $('.show-cart').on("click", ".plus-item", function(event) {
    var name = $(this).data('name');
    shoppingCart.addItemToCart(name);
    displayCart();
  })
  
  // Item count input
  $('.show-cart').on("change", ".item-count", function(event) {
     var name = $(this).data('name');
     var count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    displayCart();
  });
  
  displayCart();


  document.getElementById('add-address').addEventListener('click',addAddress);

  function addAddress(){
    var address =prompt('Enter Your address','');
    if(address){
      document.getElementById('add-address').innerText=' '+ address;
    }
    else{
      alert("Address not added");
    }
  }
  
