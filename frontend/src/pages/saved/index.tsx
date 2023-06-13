import Header from '../../components/layout/header/header';
import SavedRecipes from '../../components/saved/saved-recipes/saved-recipes';
import Modal from '../../components/shared/modal/modal';

const SavedPage = () => {
  
    return (
        <div>
            <Header></Header>
            <SavedRecipes></SavedRecipes>
            <Modal></Modal>
        </div>
    );
};

export default SavedPage;