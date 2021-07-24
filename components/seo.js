import Head from 'next/head';
import { useContext } from "react";
import { GlobalContext } from "../pages/_app";

export default function Seo({ seo }) {
    const { defaultSeo, siteName } = useContext(GlobalContext); // add context
    const fullSeo = {
        metaTitle: `${seo.metaTitle} - ${siteName}`,
        metaDescription: seo.metaDescription || defaultSeo.shareImage,
        shareImage: seo.shareImage || defaultSeo.shareImage,
    }

    return (
        <Head>
            {/* title meta tags */}
            <title>{fullSeo.metaTitle}</title>
            <meta property="og:title" content={fullSeo.metaTitle} />
            <meta property="twitter:title" content={fullSeo.metaTitle} />

            {/* description meta tags */}
            {fullSeo.metaDescription && (
                <>
                    <meta name="description" content={fullSeo.metaDescription} />
                    <meta property="og:description" content={fullSeo.metaDescription} />
                    <meta name="twitter:description" content={fullSeo.metaDescription} />
                </>
            )}

            {/* share image meta tags */}
            {fullSeo.shareImage && (
                <>
                    <meta property="og:image" content={fullSeo.shareImage.url} />
                    <meta name="twitter:image" content={fullSeo.shareImage.url} />
                    <meta name="image" content={fullSeo.shareImage.url} />
                </>
            )}

            {seo.article && <meta property="og:type" content="article" />}
            <meta name="twitter:card" content="summary_large_image" />

            <link rel='icon' href='/favicon.png' />

        </Head>
    )
}