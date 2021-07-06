import React from 'react';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

export default function Counter() {
  return (
    <div className="Counter">
      <Value value={value} />

      <Controls
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
      />
    </div>
  );
}
