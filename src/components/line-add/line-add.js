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
        const {posts, onResultsChange, onClear, onMistakes} = this.props;

        let classNames2 = 'input-container_number-p2';
        if (onClear === true) {
            classNames2 = 'input-container_number-p2-mistake';
        }

        let classNames3 = 'input-container_get-area';
        if (onMistakes === true) {
            classNames3 = 'input-container_get-area-red' ;
        }

        let classNames4 = 'input-container_number-p1';
        if (onMistakes === true) {
            classNames4 = 'input-container_number-p1-off' ;
        }

        let classNames5 = 'input-container_number-p3';
        if (onMistakes === true) {
            classNames5 = 'input-container_number-p3-on' ;
        }




        return (

                <form
                    className={'input-container'}
                    onSubmit={this.onSubmit}
                >
                    <div className={'input-container_wrap'}>
                        <div className={'input-container_description'}>
                            <p> Внимание! Длина непрерывной линии не должна превышать 12 м и должна быть кратна 0ю25 м.</p>
                        </div>
                        <div className={'input-container_get'}>
                            <h2 className={'input-container_get-h2'}>Введите длину линии (м):</h2>
                            <input className={classNames3}
                                   type="text"
                                   placeholder='10.75'
                                   onChange={this.onValueChange}
                                   value={this.state.text}
                            />
                        </div>

                        <div className={'input-container_buttons'}>
                            <button type='submit'
                                    className={'input-container_buttons-first'}>

                                Добавить новую линию
                            </button>
                            <button type="button" onClick={onResultsChange}>Показать/скрыть общую спецификацию</button>
                        </div>
                    </div>
                    <div className={'input-container_number'}>
                        <p className={classNames4}>*длина линии должна быть кратна 0,25 м</p>
                        <p className={classNames5}>*введены некорректные данные</p>
                        <p className={classNames2}>Количество линий: {posts.length}</p>

                    </div>


                </form>




        )
    }

}

