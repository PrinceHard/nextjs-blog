import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

interface ParentCompProps {
    children?: React.ReactNode;
    home?: React.ReactNode;
}
export const siteTitle = "Next.js Blog"
const name = 'Pedro Henrique';

const Layout: React.FC<ParentCompProps> = ({ children, home }) => {
    return (
        <div className="max-w-xl px-4 mt-12 mx-auto mb-24">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Building a next blog!" />
                <meta property="og:image" content={`https://og-image.vercel.app/${encodeURI(
                    siteTitle,
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className="flex flex-col items-center">
                {home ? (
                    <div>
                        <Image
                            priority
                            src="/images/profile.jpeg"
                            className="rounded-full m-auto"
                            height={144}
                            width={144}
                            alt="profile picture"
                        />
                        <h1 className="text-4xl leading-5 font-bold tracking-tighter my-4 mx-0">{name}</h1>
                    </div>
                ) : (
                    <div>
                        <Link href="/">
                            <Image
                                priority
                                src="/images/profile.jpeg"
                                className="rounded-full m-auto"
                                height={108}
                                width={108}
                                alt=""
                            />
                        </Link>
                        <h2 className="text-2xl leading-6 my-4 mx-0 font-bold">
                            <Link href="/" className="text-inherit">
                                {name}
                            </Link>
                        </h2>
                    </div>
                )}
            </header>
            <main>
                {children}
            </main>
            {!home && (
                <div className="mt-12 mx-0 mb-0 text-blue-600">
                    <Link className="hover:underline" href="/">← Back to home</Link>
                </div>
            )}
        </div>
    )
}

export default Layout;