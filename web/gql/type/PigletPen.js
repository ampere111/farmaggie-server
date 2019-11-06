module.exports = `
  type PigletPen {
    _id: String
    pig_amount: Int
    vaccine_injection: [BreederVaccineInjection]
    coop_number: Int
    created_at: String
    updated_at: String
  }

  type PigletPenVaccineInjection {
    _id: String!
    fmd: String
    csf: String
    pseudo: String
  }
`