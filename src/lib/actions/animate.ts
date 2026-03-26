export function fade_up(node: Element, delay: number = 0) {
    node.classList.add('fade-up');
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setTimeout(() => node.classList.add('visible'), delay);
                observer.disconnect();
            }
        },
        { threshold: 0.1 }
    );
    observer.observe(node);
    return {
        destroy() {
            observer.disconnect();
        }
    };
}
