import React, { Component } from 'react'; //'react'라는 라이브러리에서 Component라는 클래스 로딩--import React는 리액트 코딩할 때 항상 필수

class TOC extends Component {
  render() {
    var lists = [];
    var data = this.props.data;
    var i=0;
    while(i < data.length) { //props의 data만큼 반복
      lists.push(
        <li key={data[i].id}>
          <a
            href={"/content/"+data[i].id}
            data-id={data[i].id}
            onClick={function(e){
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >{data[i].title}</a>
        </li>);
      i=i+1;
    }

    return(
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}

export default TOC; //TOC라는 class를 외부에서 사용 가능
