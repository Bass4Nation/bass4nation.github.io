import style from './Styles/Nav.module.css'

let tuplet1: [number,boolean, string];


const links = ['Frontpage', 'About me', 'Github repos']

export default function Nav() {
  return (
    <nav className={style.navbox} >
        <h1 className={style.toptitle}>Kristoffer Snopestad Søderkvist</h1>
        <h2 className={style.undertitle}>portfolio page - Under construction</h2>
        <ul className={style.navbar}>
            {links.map((text) =>
            <li className={style.navitem}>{text}</li>
            )}
        </ul>
    </nav>
  )};