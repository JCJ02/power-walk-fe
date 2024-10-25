import Footer from "../layouts/Footer"

const NotFound = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen w-full">
                <h1 className="font-poppins font-extrabold text-7xl">404</h1>
                <h2 className="font-poppins text-slate-600 text-2xl">Oops, This Page Not Found!</h2>
                <h2 className="font-poppins text-sm text-slate-400">The link might be corrupted or the page may have been removed.</h2>
                <Footer />
            </div>
        </>
    )
}

export default NotFound
