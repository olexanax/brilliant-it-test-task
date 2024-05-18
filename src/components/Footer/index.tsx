const NAV_ITEMS_FIRST = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Leaderboard",
        href: "/",
    },
    {
        title: "About",
        href: "/",
    },
];

const NAV_ITEMS_SECOND = [
    {
        title: "Terms of Use",
        href: "/",
    },
    {
        title: "Privacy Policy",
        href: "/",
    },
    {
        title: "Cookie Policy",
        href: "/",
    },
];

const Footer = () => {
    return (
        <footer className="flex  flex-col gap-4 max-w-screen-2xl p-4 m-auto mb-[120px] w-full pt-32">
            <div className="font-medium flex justify-center gap-6">
                {NAV_ITEMS_FIRST.map((item) => (
                    <a
                        key={item.title}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {item.title}
                    </a>
                ))}
            </div>
            <span className="w-full block h-[1px] bg-[#dadada]"></span>
            <div className="flex items-center justify-between">
                <div className="flex gap-3">
                    {new Array(3).fill(null).map((_, i) => (
                        <span
                            key={i}
                            className="block h-8 w-8 rounded-[50%] bg-[#dadada]"
                        ></span>
                    ))}
                </div>
                <div className="flex gap-3 text-[#dadada]">
                    {NAV_ITEMS_SECOND.map((item) => (
                        <a
                            key={item.title}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {item.title}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
