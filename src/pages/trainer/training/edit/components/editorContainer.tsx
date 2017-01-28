import {connect} from 'react-redux';
import {IAppState} from '../../../../../reducers';
import {EditorComponent} from './editor';
import {trainingContentChangedStartAction} from '../actions/trainingContentChanged';
import {initializeEditorAction} from '../actions/initializeEditor';
import {updateTrainingContentStartAction} from '../actions/updateTrainingContent';

const mapStateToProps = (state: IAppState) => ({
  content: state.trainer.training.content,
});

const mapDispatchToProps = (dispatch) => ({
  onContentChange: (content: string) => dispatch(trainingContentChangedStartAction(content)),
  initializeTextAreaElement: (textArea: HTMLTextAreaElement) => dispatch(initializeEditorAction(textArea)),
  onToolbarButtonClick: (textArea: HTMLTextAreaElement, caret: string, offset: number) =>
    dispatch(updateTrainingContentStartAction(textArea, caret, offset)),
});

export const EditorContainerComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditorComponent);
