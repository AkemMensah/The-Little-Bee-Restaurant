import React, { useRef } from 'react';
import "../styles/MenuPage.css";
import * as images from "../images/index";
// import Navbar from "./Navbar";


// function Menu() {
//     const breakfastRef = useRef(null);
//     const lunchRef = useRef(null);
//     const dinnerRef = useRef(null);
//     const dessertRef = useRef(null);
//     const drinksRef = useRef(null);

//     const scrollToCategory = (ref) => {
//         ref.current.scrollIntoView({ behavior: 'smooth' });
//     };

//     return (
//         <div className="menu-page">
//             <div className="menu-header">
//                 <img src={images.chicken} alt="Menu Banner" className="menu-banner" />
//                 <button className="order-button">Order Now</button>
//             </div>
//             <div className="menu-tabs">
//                 <button onClick={() => scrollToCategory(breakfastRef)}>Breakfast</button>
//                 <button onClick={() => scrollToCategory(lunchRef)}>Lunch</button>
//                 <button onClick={() => scrollToCategory(dinnerRef)}>Dinner</button>
//                 <button onClick={() => scrollToCategory(dessertRef)}>Dessert</button>
//                 <button onClick={() => scrollToCategory(drinksRef)}>Drinks</button>
//             </div>
//             <div className="menu-categories">
//                 <section ref={breakfastRef} className="menu-category">
//                     <h2>Breakfast</h2>
//                     <ul>
//                         <li>
//                             <h3>Pancakes</h3>
//                             <p>$8.99 - Fluffy pancakes served with syrup and butter.</p>
//                         </li>
//                         <li>
//                             <h3>Omelette</h3>
//                             <p>$10.99 - Three-egg omelette with cheese, ham, and veggies.</p>
//                         </li>
//                         {/* Add more dishes */}
//                     </ul>
//                 </section>
//                 <section ref={lunchRef} className="menu-category">
//                     <h2>Lunch</h2>
//                     <ul>
//                         <li>
//                             <h3>Grilled Chicken Sandwich</h3>
//                             <p>$12.99 - Tender chicken breast with lettuce, tomato, and mayo.</p>
//                         </li>
//                         <li>
//                             <h3>Caesar Salad</h3>
//                             <p>$9.99 - Fresh romaine lettuce, croutons, and Caesar dressing.</p>
//                         </li>
//                         {/* Add more dishes */}
//                     </ul>
//                 </section>
//                 <section ref={dinnerRef} className="menu-category">
//                     <h2>Dinner</h2>
//                     <ul>
//                         <li>
//                             <h3>Steak and Potatoes</h3>
//                             <p>$24.99 - Juicy steak with a side of roasted potatoes.</p>
//                         </li>
//                         <li>
//                             <h3>Spaghetti Bolognese</h3>
//                             <p>$14.99 - Classic spaghetti with rich meat sauce.</p>
//                         </li>
//                         {/* Add more dishes */}
//                     </ul>
//                 </section>
//                 <section ref={dessertRef} className="menu-category">
//                     <h2>Dessert</h2>
//                     <ul>
//                         <li>
//                             <h3>Chocolate Cake</h3>
//                             <p>$6.99 - Rich, moist chocolate cake with fudge icing.</p>
//                         </li>
//                         <li>
//                             <h3>Ice Cream Sundae</h3>
//                             <p>$5.99 - Vanilla ice cream with chocolate sauce and nuts.</p>
//                         </li>
//                         {/* Add more dishes */}
//                     </ul>
//                 </section>
//                 <section ref={drinksRef} className="menu-category">
//                     <h2>Drinks</h2>
//                     <ul>
//                         <li>
//                             <h3>Mango Smoothie</h3>
//                             <p>$4.99 - Fresh mango blended with yogurt and honey.</p>
//                         </li>
//                         <li>
//                             <h3>Lemon Iced Tea</h3>
//                             <p>$3.99 - Cool and refreshing lemon-infused iced tea.</p>
//                         </li>
//                         {/* Add more dishes */}
//                     </ul>
//                 </section>
//             </div>
//         </div>
//     );
// }

function Menu() {
    const breakfastRef = useRef(null);
    const lunchRef = useRef(null);
    const dinnerRef = useRef(null);
    const dessertRef = useRef(null);
    const drinksRef = useRef(null);

    const scrollToCategory = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="menu-page">
            <div className="menu-header">
                <div className='menu-intro'>
                    <h1 className='title'>Menus</h1>
                    <div className='inter'>
                        <p>A culinary tour of BBQ traditions from around this great nation and this beautiful planet. 1.8 million years ago, humans first began cooking meat with fire. For some reason, this hasn’t led to world peace, but we’re pretty sure if we fire up enough BBQ, it will.</p>
                        <a href='/order-form'><button className="order-button">Order Now</button></a>
                    </div>
                </div>
                <div className='menu-image'>
                    <img src={images.chicken} alt="Menu Banner" className="menu-banner" />
                </div>
            </div>
            <div className="menu-tabs">
                <button onClick={() => scrollToCategory(breakfastRef)}>Breakfast</button>
                <button onClick={() => scrollToCategory(lunchRef)}>Lunch</button>
                <button onClick={() => scrollToCategory(dinnerRef)}>Dinner</button>
                <button onClick={() => scrollToCategory(dessertRef)}>Dessert</button>
                <button onClick={() => scrollToCategory(drinksRef)}>Drinks</button>
            </div>
            <div className="menu-categories">
                <section ref={breakfastRef} className="menu-category">
                    <h2>Breakfast</h2>
                    <ul>
                        <li>
                            <h3>Pancakes</h3>
                            <p>$8.99 - Fluffy pancakes served with syrup and butter.</p>
                        </li>
                        <li>
                            <h3>Omelette</h3>
                            <p>$10.99 - Three-egg omelette with cheese, ham, and veggies.</p>
                        </li>
                        <li>
                            <h3>Avocado Toast</h3>
                            <p>$7.99 - Toasted bread topped with smashed avocado and chili flakes.</p>
                        </li>
                        <li>
                            <h3>French Toast</h3>
                            <p>$9.49 - Cinnamon-spiced French toast with maple syrup.</p>
                        </li>
                        <li>
                            <h3>Breakfast Burrito</h3>
                            <p>$11.49 - Flour tortilla filled with scrambled eggs, cheese, and salsa.</p>
                        </li>
                        <li>
                            <h3>Fruit Parfait</h3>
                            <p>$6.99 - Layers of yogurt, fresh fruit, and granola.</p>
                        </li>
                    </ul>
                </section>
                <section ref={lunchRef} className="menu-category">
                    <h2>Lunch</h2>
                    <ul>
                        <li>
                            <h3>Grilled Chicken Sandwich</h3>
                            <p>$12.99 - Tender chicken breast with lettuce, tomato, and mayo.</p>
                        </li>
                        <li>
                            <h3>Caesar Salad</h3>
                            <p>$9.99 - Fresh romaine lettuce, croutons, and Caesar dressing.</p>
                        </li>
                        <li>
                            <h3>Margherita Pizza</h3>
                            <p>$13.99 - Classic pizza topped with fresh mozzarella, tomatoes, and basil.</p>
                        </li>
                        <li>
                            <h3>Beef Burger</h3>
                            <p>$14.99 - Juicy beef patty with cheese, lettuce, and pickles.</p>
                        </li>
                        <li>
                            <h3>Fish Tacos</h3>
                            <p>$11.99 - Soft tacos with grilled fish, cabbage, and lime dressing.</p>
                        </li>
                        <li>
                            <h3>Club Sandwich</h3>
                            <p>$10.99 - Stacked with turkey, bacon, lettuce, and tomato.</p>
                        </li>
                    </ul>
                </section>
                <section ref={dinnerRef} className="menu-category">
                    <h2>Dinner</h2>
                    <ul>
                        <li>
                            <h3>Steak and Potatoes</h3>
                            <p>$24.99 - Juicy steak with a side of roasted potatoes.</p>
                        </li>
                        <li>
                            <h3>Spaghetti Bolognese</h3>
                            <p>$14.99 - Classic spaghetti with rich meat sauce.</p>
                        </li>
                        <li>
                            <h3>Grilled Salmon</h3>
                            <p>$22.99 - Salmon fillet served with lemon herb sauce.</p>
                        </li>
                        <li>
                            <h3>Chicken Alfredo</h3>
                            <p>$18.99 - Fettuccine pasta with creamy Alfredo sauce and chicken.</p>
                        </li>
                        <li>
                            <h3>Vegetable Stir Fry</h3>
                            <p>$12.99 - Mixed vegetables sautéed with soy-ginger sauce.</p>
                        </li>
                        <li>
                            <h3>Lamb Chops</h3>
                            <p>$26.99 - Tender lamb chops with rosemary seasoning.</p>
                        </li>
                    </ul>
                </section>
                <section ref={dessertRef} className="menu-category">
                    <h2>Dessert</h2>
                    <ul>
                        <li>
                            <h3>Chocolate Cake</h3>
                            <p>$6.99 - Rich, moist chocolate cake with fudge icing.</p>
                        </li>
                        <li>
                            <h3>Ice Cream Sundae</h3>
                            <p>$5.99 - Vanilla ice cream with chocolate sauce and nuts.</p>
                        </li>
                        <li>
                            <h3>Cheesecake</h3>
                            <p>$7.49 - Creamy cheesecake with a graham cracker crust.</p>
                        </li>
                        <li>
                            <h3>Apple Pie</h3>
                            <p>$6.49 - Warm apple pie served with a scoop of vanilla ice cream.</p>
                        </li>
                        <li>
                            <h3>Brownie Delight</h3>
                            <p>$5.99 - Fudgy brownie with a drizzle of caramel.</p>
                        </li>
                        <li>
                            <h3>Lemon Tart</h3>
                            <p>$6.99 - Sweet and tangy lemon tart with whipped cream.</p>
                        </li>
                    </ul>
                </section>
                <section ref={drinksRef} className="menu-category">
                    <h2>Drinks</h2>
                    <ul>
                        <li>
                            <h3>Mango Smoothie</h3>
                            <p>$4.99 - Fresh mango blended with yogurt and honey.</p>
                        </li>
                        <li>
                            <h3>Lemon Iced Tea</h3>
                            <p>$3.99 - Cool and refreshing lemon-infused iced tea.</p>
                        </li>
                        <li>
                            <h3>Cappuccino</h3>
                            <p>$3.49 - Classic cappuccino with a rich foam layer.</p>
                        </li>
                        <li>
                            <h3>Orange Juice</h3>
                            <p>$2.99 - Freshly squeezed orange juice.</p>
                        </li>
                        <li>
                            <h3>Matcha Latte</h3>
                            <p>$4.49 - Creamy matcha with a hint of sweetness.</p>
                        </li>
                        <li>
                            <h3>Espresso</h3>
                            <p>$2.49 - Strong, aromatic espresso shot.</p>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}


function MenuPage()
{
    return (
        <div className='menu'>
        {/* <Navbar /> */}
        <Menu />
        </div>
    )
}


export default MenuPage;