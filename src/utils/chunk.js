const chunk = (array = [], size = 0) => array
    .reduce((acc, item) => {
        const lastChunk = acc[acc.length - 1];

        return (
            lastChunk.length < Math.ceil(array.length / size)
                ? lastChunk.push(item) && acc
                : [...acc, [item]]
        )
    }, [[]]);

export default chunk;
