import { studentAPI } from '../index';
import { TrainingTOC } from '../../../model/student/trainingToc';
import * as mockData from '../trainingTocMockData';

describe('StudentAPI', () => {
  it('should be an object', () => {
    // Assert
    expect(studentAPI).to.be.an('object').and.not.to.be.null;
  });

  it('should have a "getTOCByTraining" method that returns a promise', () => {
    // Act
    const promise = studentAPI.getTOCByTraining(null);

    // Assert
    expect(promise).to.be.an.instanceOf(Promise);
  });

  it('should return a "TrainingTOC" instance if id exists', sinon.test(function(done) {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const trainingId = 1;
    const trainingName = 'Training 1';
    const trainingContent = 'Content of TOC from training 1';
    const trainingList: TrainingTOC[] = [
      {
        id: trainingId,
        name: trainingName,
        content: trainingContent,
      },
    ];
    const trainingTOCMockDataStub = sinon.stub(mockData, 'trainingTOCMockData', () => trainingList);

    // Act
    studentAPI.getTOCByTraining(trainingId).then((trainingTOC) => {
      // Assert
      expect(trainingTOC).to.be.an('object');
      expect(trainingTOC.id).to.be.equals(trainingId);
      expect(trainingTOC.name).to.be.equals(trainingName);
      expect(trainingTOC.content).to.be.equals(trainingContent);
      done();
    }).catch(done);
  }));

  it('should return "undefined" for a non existing id', (done) => {
    // Arrange
    const trainingId = null;

    // Act
    studentAPI.getTOCByTraining(trainingId).then((trainingTOC) => {
      // Assert
      expect(trainingTOC).to.be.undefined;
      done();
    }).catch(done);
  });
});
