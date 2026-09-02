import {categories,Category,Question} from './questions';
export type Finding={category:Category;severity:'priority'|'opportunity'|'strength';title:string;body:string};
export function scoreAssessment(active:Question[],answers:Record<string,number>){
 const scores={} as Record<Category,number>;
 for(const c of categories){const qs=active.filter(q=>q.category===c);const got=qs.reduce((s,q)=>s+(answers[q.id]??0),0);scores[c]=Math.round(got/(qs.length*3)*100)}
 const overall=Math.round(categories.reduce((s,c)=>s+scores[c],0)/categories.length);
 const confidence=Math.round(Object.keys(answers).length/active.length*100);
 const findings=categories.map(category=>{const s=scores[category];if(s<50)return{category,severity:'priority' as const,title:`${category}: priority area to investigate`,body:`Your answers indicate that practices in ${category.toLowerCase()} may be reactive or inconsistently documented. A focused review could test whether process, data or program changes would strengthen the company's risk position. Subject to professional review.`};if(s<75)return{category,severity:'opportunity' as const,title:`${category}: potential opportunity`,body:`A foundation appears to exist, but consistency and evidence may be improved. This is an area to investigate before the next renewal or major business change.`};return{category,severity:'strength' as const,title:`${category}: documented strength`,body:`Your answers indicate stronger practices in this category. A workshop can help determine whether these strengths are being communicated effectively to the insurance marketplace.`}}).sort((a,b)=>scores[a.category]-scores[b.category]);
 return{scores,overall,confidence,findings,top:findings.slice(0,3)};
}
