function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="w-full h-16 bg-[#182825] text-center text-sm text-gray-400 flex items-center justify-center">
            <p>© {currentYear} W1n0t. All rights reserved.</p>
        </footer>
    )
}

export default Footer