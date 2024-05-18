

const parentTag = React.createElement('div',{id:'parent'},
    [
        React.createElement('div',{id:'child1'},
            [
                React.createElement('h1',{id : 'heading1'},'Learning React is super cool'),
                React.createElement('h2',{id : 'heading2'},'Excited to learn more')
            ]
        ),
        React.createElement('div',{id:'child2'},
            [
                React.createElement('h1',{id : 'heading1'},'Learning React is super cool'),
                React.createElement('h2',{id : 'heading2'},'Excited to learn more')
            ]
        )
    ]
)

        console.log(parentTag)
        const reactRoot = ReactDOM.createRoot(document.getElementById('mainroot'));
        reactRoot.render(parentTag)

    