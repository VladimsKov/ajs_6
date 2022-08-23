// Homework ajs_6

export default function orderByProps(obj, [...keysOfProps]) {
  let sortedKeys = [];
  for (const key in obj) {
    if (!keysOfProps.includes(key)) {
      sortedKeys.push(key);
    }
  }

  if (sortedKeys.length > 0) {
    sortedKeys.sort();
    sortedKeys = [...keysOfProps, ...sortedKeys];
  } else {
    sortedKeys = keysOfProps;
  }
  const sortedProps = [];
  sortedKeys.forEach((el, i) => {
    sortedProps[i] = { [el]: obj[el] };
  });
  return sortedProps;
}
