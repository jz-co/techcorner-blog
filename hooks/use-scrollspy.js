import { useEffect, useRef, useState } from "react";

export function useScrollSpy(selectors, options) {
    const [activeId, setActiveId] = useState("");
    const observer = useRef(null);

    useEffect(() => {
        const elements = selectors.map((selector) =>
            document.querySelector(selector)
        )
        observer.current?.disconnect();
        observer.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry?.isIntersecting) {
                    setActiveId(entry.target.getAttribute("id"));
                }
            })
        }, options)

        elements.forEach((element) => {
            if (element) observer.current?.observe(element);
        })

        return () => observer.current?.disconnect();
    }, [selectors, options])

    return activeId;
}