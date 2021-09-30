import NoteSectionContainer from "./note-section-container";
import ExpandableSection from "./expandable-section";
import { NoteMarkdown } from "./markdown";

export default function NoteSection({ component, content, ...props }) {
    if (component == "components.section") {
        return (<NoteSectionContainer spacing={6}>
            <NoteMarkdown>
                {content}
            </NoteMarkdown>
        </NoteSectionContainer>)
    } else if (component == "components.extended-section") {
        return (
            <NoteSectionContainer>
                {content.map((subsection) => {
                    if (subsection.type == "plaintext") {
                        return (<NoteMarkdown key={subsection.id}>{subsection.content}</NoteMarkdown>)
                    } else if (subsection.type == "expandable") {
                        return (<ExpandableSection key={subsection.id} title={subsection.title}>
                            <NoteMarkdown>{subsection.content}</NoteMarkdown>
                        </ExpandableSection>)
                    }
                })}
            </NoteSectionContainer>
        );
    }
}