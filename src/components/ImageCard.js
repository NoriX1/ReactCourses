import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props);

        //Ref ипользуется для получения доступа к конкретному элементу React
        //Заменяет собой получение элемента через document.querySelector()
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        console.log(this.imageRef);
        //Из-за того, что в данный момент изображение ещё не загрузилось
        //Вместо реальной высоты изображения мы увидим 0
        console.log(this.imageRef.current.clientHeight);
    }
    render(){
        const {description, urls} = this.props.image;
        return (
            <div>
                <img ref={this.imageRef} src={urls.regular} alt={description}/>
            </div>
        );
    }
}

export default ImageCard;