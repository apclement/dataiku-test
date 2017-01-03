'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('Record', {
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined,
      field: 'age'
    },
    classOfWorker: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'class of worker'
    },
    industryCode: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'industry code'
    },
    occupationCode: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'occupation code'
    },
    education: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'education'
    },
    wagePerHour: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'wage per hour'
    },
    lastEducation: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'last education'
    },
    maritalStatus: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'marital status'
    },
    majorIndustryCode: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'major industry code'
    },
    majorOccupationCode: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'major occupation code'
    },
    mace: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'mace'
    },
    hispanice: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'hispanice'
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: undefined,
      field: 'sex'
    },
    memberOfLabor: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'member of labor'
    },
    reasonForUnemployment: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'reason for unemployment'
    },
    fulltime: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'fulltime'
    },
    capitalGain: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'capital gain'
    },
    capitalLoss: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'capital loss'
    },
    dividends: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'dividends'
    },
    incomeTaxLiability: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'income tax liability'
    },
    previousResidenceRegion: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'previous residence region'
    },
    previousResidenceState: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'previous residence state'
    },
    householdWithFamily: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'household-with-family'
    },
    householdSimple: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'household-simple'
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'weight'
    },
    msaChange: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'msa-change'
    },
    regChange: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'reg-change'
    },
    withinRegChange: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'within-reg-change'
    },
    livedHere: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'lived-here'
    },
    migrationPrevResInSunbelt: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'migration prev res in sunbelt'
    },
    numPersonsWorkedForEmployer: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'num persons worked for employer'
    },
    familyMembersUnder118: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'family members under 118'
    },
    fatherBirthCountry: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'father birth country'
    },
    motherBirthCountry: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'mother birth country'
    },
    birthCountry: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'birth country'
    },
    citizenship: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'citizenship'
    },
    ownBusinessOrSelfEmployed: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'own business or self employed'
    },
    fillQuestionnaireForVeteransAdmin: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: "fill questionnaire for veteran's admin"
    },
    veteransBenefits: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'veterans benefits'
    },
    weeksWorkedInYear: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'weeks worked in year'
    },
    year: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'year'
    },
    salaryRange: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined,
      field: 'salary range'
    }
  }, {
    tableName: 'census_learn_sql'
  });
}
