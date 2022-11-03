import styles from './Navbar.module.scss'
import { useState } from 'react';
const navItems= ['PAYMENTS', 'REFUND','PRICING', 'SHIPPING', 'OTHER']
const Navbar = () => {
    const [active,setActive]=useState(2)
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Have Any Question ?</h1>
            <div className={styles.navbar}>
                {navItems.map((item,index)=>{
                    return (
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a 
                            key={index}
                            href="#"
                            style={active===index?{
                                color:'var(--primary-color)'
                                
                            }:{}}
                            onClick={(e)=>{
                                setActive(index);
                                e.preventDefault();
                            }}
                        >
                            {item}
                            {active===index?
                                <span className={styles.active}></span>
                            :''}
                        </a>
                    )
                })}
            </div>
        </div>
    )
};
export default Navbar;