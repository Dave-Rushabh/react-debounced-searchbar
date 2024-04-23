# React Debounced Searchbar (npm) package

The most light weighted and easy to use debounced searchbar for you react projects.

## How to install

npm i react-debounced-searchbar

## How to use

![code snippet](https://i.imgur.com/cZGmtfE.png)

## The component accepts the following props

| **Prop name**       | _Description of the prop_                                             | _Accepted value_    | Default value            |
| ------------------- | --------------------------------------------------------------------- | ------------------- | ------------------------ |
| **callback**        | _Callback function which will be fired on debounced delay completion_ | a function () => {} | NA                       |
| **delay**           | _Set delay for debounce_                                              | number              | 500 (ms)                 |
| **placeholder**     | _Placeholder for the input_                                           | string              | "Search..."              |
| **OnSearchIcon**    | _Icon to be displayed as search icon_                                 | React.FC            | Default Search icon      |
| **OnClearIcon**     | _Icon to be displayed as cross icon_                                  | React.FC            | Default Cross icon       |
| **iconBgFillColor** | _Bg filled color for both the icons i.e. search and cross_            | string              | #f2f2f2                  |
| **blurBoxShadow**   | _Box shadow for the input when input is not focused_                  | string              | Default blur box shadow  |
| **focusBoxShadow**  | _Box shadow for the input when input is focused_                      | string              | Default focus box shadow |
| **focusBoxShadow**  | _Box shadow for the input when input is focused_                      | string              | Default focus box shadow |
| **iconsNeeded**     | _Specify if the search and cross icons are needed_                    | boolean             | true                     |
