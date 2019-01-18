import React from 'react';
import { string } from 'prop-types';

interface IProps {
    text: string,
    delimiter?: string
}

class SplitText extends React.Component<IProps> {
    static defaultProps = {
        delimiter: ","
    }
    render() {
        const bits = this.props.text.split(this.props.delimiter!);
        console.log(bits);
        return (
            <ul>
                {
                    bits.map((bit: string) => <li key={bit}>{bit}</li>)
                }
            </ul>
        );
    }
}

const App = () =>
    <div>
        <SplitText text="one,two,three" />
    </div>

export { App };
