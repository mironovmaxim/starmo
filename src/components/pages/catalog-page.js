import React from 'react';
import CatalogList from '../catalog-list';
import { withRouter } from 'react-router-dom';

function CatalogPage ({history}) {
    return (
      <CatalogList 
        onItemSelected = { (itemId) => history.push(`${itemId}`)} />
    );
}

export default withRouter(CatalogPage);
