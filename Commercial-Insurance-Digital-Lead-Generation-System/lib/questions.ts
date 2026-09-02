export type Category = 'Insurance Governance'|'Renewal Readiness'|'Claims Governance'|'Risk Control & Operations'|'Contractual Risk Transfer'|'Emerging Risk';
export type Industry = 'Logistics / 3PL'|'Manufacturing'|'Construction'|'Commercial Real Estate'|'Professional Services';
export type Question = {id:string;category:Category;text:string;help:string;industries?:Industry[];critical?:boolean};
export const categories: Category[]=['Insurance Governance','Renewal Readiness','Claims Governance','Risk Control & Operations','Contractual Risk Transfer','Emerging Risk'];
export const options=[
 {value:0,label:'Reactive / undocumented',detail:'No consistent process or the answer is unknown'},
 {value:1,label:'Partially established',detail:'Some activity, but inconsistent or owner-dependent'},
 {value:2,label:'Documented',detail:'A defined process exists and is usually followed'},
 {value:3,label:'Managed and reviewed',detail:'Documented, monitored, tested and periodically improved'}
];
export const questions:Question[]=[
{id:'limits',category:'Insurance Governance',text:'How are liability limits selected?',help:'Consider risk tolerance, balance sheet, contracts and loss scenarios.',critical:true},
{id:'values',category:'Insurance Governance',text:'How are property and equipment values validated?',help:'Consider replacement cost studies, recent projects and annual updates.'},
{id:'entities',category:'Insurance Governance',text:'How are legal entities and named insureds checked?',help:'Consider acquisitions, property entities, subsidiaries and joint ventures.'},
{id:'timeline',category:'Renewal Readiness',text:'How early does strategic renewal planning begin?',help:'Planning means exposure collection, strategy and story development, not only requesting quotes.',critical:true},
{id:'submission',category:'Renewal Readiness',text:'How actively does leadership review the carrier submission?',help:'Consider whether strengths, changes and controls are clearly presented.'},
{id:'changes',category:'Renewal Readiness',text:'How are acquisitions, new locations, revenue, payroll and services captured?',help:'Consider a formal annual change-control process.'},
{id:'claims-owner',category:'Claims Governance',text:'Is there a defined internal owner and intake process for claims?',help:'Consider incident reporting, escalation and documentation.',critical:true},
{id:'claims-review',category:'Claims Governance',text:'Are open claims reviewed on a scheduled cadence?',help:'Consider adjuster updates, reserves, counsel and corrective action.'},
{id:'claims-learning',category:'Claims Governance',text:'Are claim trends converted into operational improvements?',help:'Consider root-cause review and accountability.'},
{id:'training',category:'Risk Control & Operations',text:'Are critical safety and compliance procedures documented and trained?',help:'Focus on the most material hazards in your industry.'},
{id:'cyber',category:'Risk Control & Operations',text:'Are cyber controls and incident response tested?',help:'Consider MFA, backups, payments, vendors and exercises.',critical:true},
{id:'recommendations',category:'Risk Control & Operations',text:'Are carrier or consultant recommendations tracked to closure?',help:'Consider ownership, evidence and deadlines.'},
{id:'contracts',category:'Contractual Risk Transfer',text:'Must a signed agreement be in place before work begins?',help:'Consider vendors, subcontractors, tenants and customers.',critical:true},
{id:'requirements',category:'Contractual Risk Transfer',text:'Are insurance and indemnification requirements standardized and reviewed?',help:'Consider legal and insurance review together.'},
{id:'verification',category:'Contractual Risk Transfer',text:'Does verification go beyond collecting a certificate?',help:'Consider endorsements, limits, exclusions and renewal tracking.'},
{id:'annual-review',category:'Emerging Risk',text:'Is a formal enterprise risk review conducted outside policy renewal?',help:'Consider operational, cyber, environmental and regulatory change.'},
{id:'new-risk',category:'Emerging Risk',text:'Are new technologies, products and locations assessed before launch?',help:'Consider multidisciplinary sign-off.'},
{id:'monitoring',category:'Emerging Risk',text:'Is responsibility assigned for monitoring emerging risks?',help:'Consider counsel, broker, finance, operations and IT.'},
{id:'fleet',category:'Risk Control & Operations',text:'Are drivers, vehicles and fleet performance actively managed?',help:'Consider MVRs, telematics, training and corrective action.',industries:['Logistics / 3PL','Construction']},
{id:'cargo',category:'Insurance Governance',text:'Are cargo responsibilities and contractual liabilities mapped by shipment type?',help:'Consider owned, brokered and subcontracted transportation.',industries:['Logistics / 3PL']},
{id:'continuity',category:'Risk Control & Operations',text:'Has production or distribution interruption been scenario-tested?',help:'Consider utilities, key equipment, suppliers and customers.',industries:['Manufacturing','Logistics / 3PL']},
{id:'products',category:'Insurance Governance',text:'Are product liability and recall responsibilities documented?',help:'Consider traceability, quality controls and contractual allocation.',industries:['Manufacturing']},
{id:'subcontractors',category:'Contractual Risk Transfer',text:'Are subcontractors prevented from mobilizing until controls are verified?',help:'Consider contracts, COIs, endorsements and safety credentials.',industries:['Construction']},
{id:'sov',category:'Renewal Readiness',text:'Is the statement of values validated at property level?',help:'Consider occupancy, construction, protection, valuation and business income.',industries:['Commercial Real Estate']},
{id:'vendors',category:'Contractual Risk Transfer',text:'Are property-management and vendor agreements reviewed for risk transfer?',help:'Consider management agreements, maintenance and snow removal.',industries:['Commercial Real Estate']},
{id:'eando',category:'Insurance Governance',text:'Are service scope and professional liability exposures reviewed when contracts change?',help:'Consider warranties, indemnity, limitation of liability and reliance.',industries:['Professional Services']}
];
