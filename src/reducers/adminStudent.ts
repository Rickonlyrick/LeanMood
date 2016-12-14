import { Action } from 'redux'
import { StudentSummary } from '../model/studentSummary'
import { adminActionEnums} from '../common/actionEnums/admin'


export class AdminStudentState {
  studentSummaryList : StudentSummary[];

  public constructor() {
    this.studentSummaryList = [];
  }
}

export const adminStudentReducer = (state : AdminStudentState = new AdminStudentState(), action) => {
  switch(action.type) {
    case adminActionEnums.GET_SUMMARY_STUDENT_REQUEST_COMPLETED:
      return handleGetSummaryTrainingRequestCompleted(state, action.payload);
  }

  return state;
}

const handleGetSummaryTrainingRequestCompleted =
  (state : AdminStudentState, payload : StudentSummary[]) => {
      const newState = Object.assign({}, state, {studentSummaryList: payload});
      return newState;
}