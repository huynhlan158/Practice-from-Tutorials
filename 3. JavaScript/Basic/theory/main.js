/*Promise - practice 1

// var users = [
//     {
//         id: 01,
//         name: 'Lan Huynh'
//     },
//     {
//         id: 02,
//         name: 'Thu Dam'
//     },
//     {
//         id: 03,
//         name: 'Nguoi Yeu 1'
//     },
//     {
//         id: 04,
//         name: 'Nguoi Yeu 2'
//     },
//     {
//         id: 05,
//         name: 'Nguoi Yeu 3'
//     },
//     {
//         id: 06,
//         name: 'Nguoi Yeu 4'
//     },
//     {
//         id: 07,
//         name: 'Nguoi Yeu 5'
//     },
//     {
//         id: 08,
//         name: 'Nguoi Yeu 6'
//     }
// ];

// var comments = [
//     {
//         id: 01,
//         user_id: 01,
//         text: 'How are you?'
//     },
//     {
//         id: 02,
//         user_id: 02,
//         text: 'I\'m fine, thank you. And you?'
//     },
//     {
//         id: 03,
//         user_id: 02,
//         text: 'Ah. Can I borrow some money?'
//     },
//     {
//         id: 04,
//         user_id: 05,
//         text: 'Haizz. He always thinks about money'
//     }
// ];


// function getComments() {
//     return new Promise (function (resolve) {
//         setTimeout(function(){
//             resolve(comments);
//         },500)
//     })
// }

// function getUserByIds(userIds) {
//     return new Promise(function(resolve) {
//         var userComments = users.filter(function(user) {
//             return userIds.includes(user.id);
//         });
//         setTimeout(function() {
//             resolve(userComments);
//         }, 500);
//     })
// }

// getComments()
//     .then(function(comments) {
//         var userIds = comments.map(function(comment) {
//             return comment.user_id;
//         });
//         return getUserByIds(userIds)
//             .then(function(userComments) {
//                 return {
//                     userComments: userComments,
//                     comments: comments
//                 }
//             })
//     })
//     .then(function(data) {
//         var commentBlock = document.querySelector('.comment-box');
//         var html = '';
//         data.comments.forEach(function(comment) {
//             var user = data.userComments.find(function(user) {
//                 return user.id === comment.user_id;
//             });
//             html += `<li>${user.name}: ${comment.text}</li>`;
//         })
//         commentBlock.innerHTML = html;
//     })






/*Promise - practice 2

// var fruits = [
//     {
//         fruit_id: 'A01',
//         fruit_name: 'Banana',
//         price: 20
//     },
//     {
//         fruit_id: 'A02',
//         fruit_name: 'Apple',
//         price: 30
//     },
//     {
//         fruit_id: 'A03',
//         fruit_name: 'Grape',
//         price: 50
//     },
//     {
//         fruit_id: 'A04',
//         fruit_name: 'Durian',
//         price: 100
//     },
//     {
//         fruit_id: 'A05',
//         fruit_name: 'Orange',
//         price: 40
//     }
// ];

// var staffs = [
//     {
//         staff_id: 'B01',
//         staff_name: 'NGUYEN VAN B01'
//     },
//     {
//         staff_id: 'B02',
//         staff_name: 'NGUYEN VAN B02'
//     },
//     {
//         staff_id: 'B03',
//         staff_name: 'NGUYEN VAN B03'
//     },
//     {
//         staff_id: 'B04',
//         staff_name: 'NGUYEN VAN B04'
//     },
//     {
//         staff_id: 'B05',
//         staff_name: 'NGUYEN VAN B05'
//     }
// ];

// var orders = [
//     {
//         order_id: 001,
//         staff_id: 'B03',
//         fruit_id: 'A02',
//         date: 'Oct 13, 2021'
//     },
//     {
//         order_id: 002,
//         staff_id: 'B01',
//         fruit_id: 'A04',
//         date: 'Oct 10, 2021'
//     },
//     {
//         order_id: 003,
//         staff_id: 'B05',
//         fruit_id: 'A01',
//         date: 'Oct 08, 2021'
//     },
// ];

// function getOrders() {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             resolve(orders);
//         }, 500);
//     })
// }

// function getStaffByIds(staffIds){
//     return new Promise(function(resolve) {
//         var staffList = staffs.filter(function(staff) {
//             return staffIds.includes(staff.staff_id);
//         });
//         setTimeout(function() {
//             resolve(staffList);
//         }, 500);
//     })
// }

// function getFruitByIds(fruitIds){
//     return new Promise(function(resolve) {
//         var fruitList = fruits.filter(function(fruit) {
//             return fruitIds.includes(fruit.fruit_id);
//         });
//         setTimeout(function() {
//             resolve(fruitList);
//         }, 500);
//     })
// }

// getOrders()
//     .then(function(ordersList) {
//         var staffIds = ordersList.map(function(order) {
//             return order.staff_id;
//         });
//         return getStaffByIds(staffIds)
//             .then(function(staffList) {
//                 return {
//                     ordersList: ordersList,
//                     staffList: staffList,
//                 }
//             })
//     })
//     .then(function(data1) {
//         var fruitIds = data1.ordersList.map(function(order) {
//             return order.fruit_id;
//         });
//         return getFruitByIds(fruitIds)
//             .then(function(fruitList) {
//                 return {
//                     ordersList: data1.ordersList,
//                     staffList: data1.staffList,
//                     fruitList: fruitList
//                 };
//             })
//     })
//     .then(function(data) {
//         var boxElement = document.querySelector('.box');
//         var html = '';
//         data.ordersList.forEach(function(order) {
//             var staff = data.staffList.find(function(staff) {
//                 return order.staff_id === staff.staff_id;
//             });
//             var fruit = data.fruitList.find(function(fruit) {
//                 return order.fruit_id === fruit.fruit_id;
//             })
//             html += `<li>${order.date}: ${staff.staff_name} - ${fruit.fruit_name}</li>`;
//         });
//         boxElement.innerHTML = html;
//     })





/*Fetch - practice 1*/

// var postApi = 'https://jsonplaceholder.typicode.com/posts';

// fetch(postApi)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(posts) {
//         var htmls = posts.map(function(post) {
//             return `<li>
//                 <h2>${post.title}</h2>
//                 <p>${post.body}</p>
//             </li>`;
//         })
//         document.querySelector('.post-display').innerHTML = htmls.join('');
//     })


/*Fetch - practice 2*/

// var commentApi = 'https://jsonplaceholder.typicode.com/comments';

// fetch(commentApi)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(comments) {
//         var htmls = comments.map(function(comment) {
//             return `<li>
//                 <h2>${comment.name}</h2>
//                 <p>${comment.body}</p>
//             </li>`
//         });


//         document.querySelector('.comments-display').innerHTML = htmls.join('');
//     })


function highlight ([first, ...rest], ...variable) {
    return variable.reduce(
        (result, value) => [...result, `<span>${value}</span>`, rest.shift()], 
        [first]
    ).join('');
}

var brand = 'F8';
var course = 'Javascript';

const htmls = highlight `Học lập trình ${course} tại ${brand}!`;

console.log(htmls);