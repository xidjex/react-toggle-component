import { useLayoutEffect, useRef } from 'react';

const useToggleToAbsolute = () => {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        if (containerRef.current) {
            const childs = Array.from(containerRef.current.children);

            const positions = childs.map((element) => {
                const { x, y } = element.getBoundingClientRect();
                const { offsetTop, y: Y, clientY, pageY } = element;

                console.log(element.offsetTop);

                return { x, y };
            });



            console.table(positions);


            // positions.forEach(({ x, y, element }) => {
            //     element.style.left = `${x}px`;
            //     // element.style.top = `${y}px`;
            //     element.style.position = 'absolute';
            // });
        }

    }, []);

    return containerRef;
};

export default useToggleToAbsolute;
