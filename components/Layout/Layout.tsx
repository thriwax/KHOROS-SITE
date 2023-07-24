import Header from "../Header/Header";

const Layout = ({children}) => (
    <>
        <div><Header /></div>
        {children}
    </>
)

export default Layout;