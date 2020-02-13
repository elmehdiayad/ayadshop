import React from 'react'
import MenuItem from '../menu-item/menu-item.component';
import './directory-menu.styles.scss';
import { connect } from 'react-redux';
import { selectSections } from '../../redux/directory-redux/directory.selectors';
import { createStructuredSelector } from 'reselect';

const DirectoryMenu = ({sections}) => {
    return (
      <div className='directory-menu'>
        {sections.map(({id, ...otherLinks}) => (<MenuItem key = {id} {...otherLinks}/>))}
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
  sections: selectSections
});

export default connect(mapStateToProps)(DirectoryMenu);