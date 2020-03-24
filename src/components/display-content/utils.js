import { componentType as elseType } from './Else';

const filterChilds = (childs) => childs.reduce(([c = [], e = []], node) => {
    return node?.type?.componentType === elseType ? [c, [...e, node]] : [[...c, node], e];
}, []);

export { filterChilds };
