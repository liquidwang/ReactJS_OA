import React from "react";
import MenuList from "./MenuList/MenuList";
import ItemDetail from "./ItemDetail/ItemDetail";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuData:[],
            menuDetail: [],
            selectedItem: null,
        }
    }

    getData = () => {
        fetch("http://stream-restaurant-menu-svc.herokuapp.com/category")
            .then(response => response.json())
            .then(response => {
                this.setState({
                    menuData: response,
                });
                // console.log(this.state.menuData);
            })
    };

    onItemClick = async (item) => {
        await this.setState({
            selectedItem: item
        });

        // console.log(this.state.selectedItem);
        await fetch(`https://stream-restaurant-menu-svc.herokuapp.com/item?category=${this.state.selectedItem}`)
            .then(res => res.json())
            .then(res => this.setState({
                menuDetail: res
            }));
        // console.log(this.state.menuDetail);
    };

    componentDidMount() {
        this.getData();
    }

    render() {
        return(
            <div>
                <h3>1. Welcome to Chef Chu's Restaurant</h3>
                <h4>Menu Categories</h4>
                <MenuList
                    list={this.state.menuData}
                    onItemSelect={this.onItemClick}
                />
                <ItemDetail
                    menuDetail={this.state.menuDetail}
                    selectedItem={this.state.selectedItem}
                />
            </div>
        )
    }
}

export default App;
