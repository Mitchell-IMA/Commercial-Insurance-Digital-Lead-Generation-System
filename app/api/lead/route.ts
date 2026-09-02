const { data: org } = await supabase
  .from("organizations")
  .insert({
    company_name: body.company,
    industry: body.industry,
    revenue_band: body.revenueBand,
    employee_band: body.employeeBand
  })
  .select()
  .single();
const { data: contact } = await supabase
  .from("contacts")
  .insert({
    organization_id: org.id,
    first_name: body.name,
    title: body.title,
    email: body.email,
    phone: body.phone,
    renewal_month: body.renewalMonth
  })
  .select()
  .single();
const { data: assessment } = await supabase
  .from("assessments")
  .insert({
    organization_id: org.id,
    contact_id: contact.id,

    overall_score: body.results.overall,
    confidence_score: body.results.confidence,

    insurance_governance:
      body.results.scores["Insurance Governance"],

    renewal_readiness:
      body.results.scores["Renewal Readiness"],

    claims_governance:
      body.results.scores["Claims Governance"],

    risk_control:
      body.results.scores["Risk Control & Operations"],

    contractual_risk_transfer:
      body.results.scores["Contractual Risk Transfer"],

    emerging_risk:
      body.results.scores["Emerging Risk"]
  })
  .select()
  .single();
