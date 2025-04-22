const container = React.createElement(
    "div",
    { className: "container", id: "conatainer" },
    [
        React.createElement("section", { key: 1 }, [
            React.createElement("p", { key: 1 }, "This is an image"),
            React.createElement("img", {
                key: 2,
                src: "react-js-clipart-8.png",
                style: { width: "100px" },
            }),
        ]),
        React.createElement("section", { key: 2 }, [
            React.createElement("form", { key: 1 }, [
                React.createElement("input", { key: 1,id : "username"})
            ])
        ]),
    ]
);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(container);
