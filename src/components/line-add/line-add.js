import React, {Component} from 'react';
import './line-add.css';

export default class LineAdd extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    

    onValueChange(e) {
        this.setState ({
            text: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        });
    }

    render () {
        const {posts} = this.props;
      
        return (
            <form
                className={'input-container'}
                onSubmit={this.onSubmit}
            >
                <div className={'input-container_wrap'}>
                    <div className={'input-container_description'}>
                        <p> Внимание! Длина непрерывной линии не должна превышать 12 м и должна быть кратна 0,25 м.</p>
                    </div>
                    <div className={'input-container_get'}>
                        <h2 className={'input-container_get-h2'}>Введите длину линии (м):</h2>
                        <input className={'input-container_get-area'}
                               type="text"
                               placeholder='10.25'
                               onChange={this.onValueChange}
                               value={this.state.text}
                        />
                    </div>

                    <div className={'input-container_buttons'}>
                        <button type='submit'
                                className={'input-container_buttons-first'}>

                            Добавить новую линию
                        </button>
                        <button type="button">Вывести общую спецификацию</button>
                    </div>
                </div>
                <div className={'input-container_number'}>
                    <p className={'input-container_number-p1'}>*длина линии должна быть кратна 0,25 м</p>
                    <p className={'input-container_number-p2'}>Колличество линий: {posts.length}</p>
                </div>


            </form>
        )
    }

}

