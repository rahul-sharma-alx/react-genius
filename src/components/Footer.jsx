function Footer(){
    return(
        <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white">
            <div className="container mx-auto text-center"> 
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} My Website. Made by Alx.
                </p>
            </div>
        </footer>
    )
}

export default Footer;