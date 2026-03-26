export function fade_up(node: Element, delay: number = 0) {
    node.classList.add("fade-up");
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setTimeout(() => node.classList.add("visible"), delay);
                observer.disconnect();
            }
        },
        { threshold: 0.1 },
    );
    observer.observe(node);
    return {
        destroy() {
            observer.disconnect();
        },
    };
}

export function count_up(
    node: HTMLElement,
    opts: { target: number; duration?: number; suffix?: string },
) {
    const { target, duration = 1500, suffix = "" } = opts;
    node.textContent = "0" + suffix;
    let started = false;

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting && !started) {
                started = true;
                const start_time = performance.now();

                function step(now: number) {
                    const elapsed = now - start_time;
                    const progress = Math.min(elapsed / duration, 1);
                    // ease-out: fast start, slow finish
                    const eased = 1 - (1 - progress) ** 2;
                    const current = Math.round(eased * target);
                    node.textContent = current.toString() + suffix;
                    if (progress < 1) {
                        requestAnimationFrame(step);
                    } else {
                        node.textContent = target.toString() + suffix;
                    }
                }

                requestAnimationFrame(step);
                observer.disconnect();
            }
        },
        { threshold: 0.5 },
    );
    observer.observe(node);
    return {
        destroy() {
            observer.disconnect();
        },
    };
}

export function slide_in_left(node: Element, delay: number = 0) {
    node.classList.add("slide-in-left");
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setTimeout(() => node.classList.add("visible"), delay);
                observer.disconnect();
            }
        },
        { threshold: 0.1 },
    );
    observer.observe(node);
    return {
        destroy() {
            observer.disconnect();
        },
    };
}
