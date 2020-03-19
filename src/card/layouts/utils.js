// Returns random value in negative or positive range value
const random = (range = 0) => Math.round(Math.random() * range) * (Math.random() < 0.5 ? -1 : 1);

const chunk = (array = [], size = 0) => array
    .reduce((acc, item) => {
        const lastChunk = acc[acc.length - 1];

        return (
            lastChunk.length < Math.ceil(array.length / size)
                ? lastChunk.push(item) && acc
                : [...acc, [item]]
        )
    }, [[]]);

export { random, chunk };
