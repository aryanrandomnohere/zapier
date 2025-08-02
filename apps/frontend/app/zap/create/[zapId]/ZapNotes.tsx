import { useEffect, useState, useRef } from "react";
import { ActivityIcon, ChevronDown, Plus, Search, X } from "lucide-react";
import { useRecoilState, useRecoilValue } from "recoil";
import { zapCreateState } from "@/app/RecoilState/store/zapCreate";
import axios from "axios";
import { useParams } from "next/navigation";
import { userAtom } from "@/app/RecoilState/store/userAtom";

export default function ZapNotes() {
  const [zapNote, setZapNote] = useState<string>("");
  const [stepNotes, setStepNotes] = useState<
    { stepId: string; note: string }[]
  >([]);
  const [showAddNote, setShowAddNote] = useState(false);
  const [selectedStep, setSelectedStep] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedStep, setExpandedStep] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const zaps = useRecoilValue(zapCreateState);
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  // Refs for debouncing
  const zapNoteTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const stepNoteTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [user, setUser] = useRecoilState(userAtom);
  const { zapId } = useParams();
  // Mock steps data - replace with actual data from your app

  const filteredSteps = zaps.selectedItems.filter((step) =>
    step.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  console.log(filteredSteps);
  useEffect(() => {
    fetchNotes();
  }, []); // Add zapId dependency in your actual component

  // Your original fetch function - RESTORED
  async function fetchNotes() {
    try {
      // Uncomment and modify for your actual API
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/${zapId}/notes`,
      );

      // Extract ZAP_NOTE content
      const zapNoteContent =
        data.zapNotes?.find((n: any) => n.type === "ZAP_NOTE")?.content || "";

      // Map stepNotes to expected format (actionId + note string)
      const mappedStepNotes = (data.stepNotes || []).map((s: any) => ({
        stepId: s.stepId,
        note: s.note?.content || "",
      }));
      console.log(mappedStepNotes);
      mappedStepNotes.map((s: { stepId: string; note: string }) => {
        if (s.note !== "") {
          const newStepNote = selectedItems.add(s.stepId);
          setSelectedItems(newStepNote);
        }
      });

      setZapNote(zapNoteContent);
      setStepNotes(mappedStepNotes);

      // Mock data for demo
    } catch (err) {
      console.error("Failed to fetch notes:", err);
    }
  }

  // Auto-save function
  const saveNotes = async () => {
    setIsSaving(true);
    try {
      // Replace with your actual API call
      console.log("Saving notes:", { zapNote, stepNotes });

      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/${zapId}/notes`,
        {
          zapNotes: zapNote,
          stepNotes: stepNotes.map((s) => ({
            stepId: s.stepId,
            note: s.note,
          })),
          userId: Number(user?.id) || 8,
        },
      );

      setLastSaved(new Date());
      console.log("Notes saved successfully");
    } catch (error) {
      console.error("Failed to save notes:", error);
    } finally {
      setIsSaving(false);
    }
  };

  // Debounced save for zap notes
  const debouncedSaveZapNote = () => {
    if (zapNoteTimeoutRef.current) {
      clearTimeout(zapNoteTimeoutRef.current);
    }

    zapNoteTimeoutRef.current = setTimeout(() => {
      saveNotes();
    }, 3000);
  };

  // Debounced save for step notes
  const debouncedSaveStepNote = () => {
    if (stepNoteTimeoutRef.current) {
      clearTimeout(stepNoteTimeoutRef.current);
    }

    stepNoteTimeoutRef.current = setTimeout(() => {
      saveNotes();
    }, 3000);
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (zapNoteTimeoutRef.current) {
        clearTimeout(zapNoteTimeoutRef.current);
      }
      if (stepNoteTimeoutRef.current) {
        clearTimeout(stepNoteTimeoutRef.current);
      }
    };
  }, []);

  // Handle zap note changes with debounced save
  const handleZapNoteChange = (value: string) => {
    setZapNote(value);
    debouncedSaveZapNote();
  };

  // Handle step note text changes with debounced save
  const handleStepNoteChange = (stepId: string, note: string) => {
    setStepNotes((prev) =>
      prev.map((s) => (s.stepId === stepId ? { ...s, note } : s)),
    );
    debouncedSaveStepNote();
  };

  const addNewStepNote = (id: string) => {
    const newStepNote = selectedItems.add(id);
    setSelectedItems(newStepNote);
  };

  const selectStepForNote = (stepId: string) => {
    setSelectedStep(stepId);
  };

  const getStepName = (stepId: string) => {
    const requiredStep = zaps.selectedItems.find(
      (step) => step.stepId === stepId,
    );
    return requiredStep?.metadata.fields[0].fieldValue || requiredStep?.name;
  };

  return (
    <div className=" space-x-3">
      <div className="p-4">
        {/* Header */}
        <div className=" border-b mb-4   border-zinc-300">
          <div className="flex items-center justify-between">
            <h2 className=" font-semibold text-gray-900">Notes</h2>
          </div>
          {/* Learn about notes link */}
          <div className="mb-6">
            <a href="#" className="text-blue-600 text-xs underline">
              Learn about notes
            </a>
            <span className="text-xs text-gray-600 ml-1">
              to document Zaps and steps.
            </span>
          </div>
        </div>

        {/* Zap Notes Section */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <h3 className="text-sm font-medium text-gray-900">Zap notes</h3>
            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded">
              AI beta
            </span>
            <button className="ml-auto flex items-center gap-1 text-sm text-gray-600 border border-gray-300 rounded px-3 py-1 hover:bg-gray-50">
              <span>✨</span>
              Generate with AI
            </button>
          </div>

          <div className="relative">
            <textarea
              className="w-full h-32 border border-gray-300 rounded-md p-3 text-sm resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
              placeholder=""
              value={zapNote}
              onChange={(e) => handleZapNoteChange(e.target.value)}
              maxLength={5000}
            />
            <div className="absolute bottom-3 right-3 text-xs text-gray-400">
              {zapNote.length}/5000 characters
            </div>
            {isSaving && (
              <div className="absolute top-2 right-2 text-xs text-blue-600">
                Saving...
              </div>
            )}
            {lastSaved && !isSaving && (
              <div className="absolute top-2 right-2 text-xs text-green-600">
                Saved {lastSaved.toLocaleTimeString()}
              </div>
            )}
          </div>
        </div>

        {/* Step Notes Section Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-900">Step notes</h3>
          <button
            onClick={() => setShowAddNote(!showAddNote)}
            className="flex items-center gap-1 text-sm text-gray-600 border border-gray-300 rounded px-3 py-1 hover:bg-gray-50"
          >
            <Plus size={14} />
            Add a note
          </button>
        </div>

        {/* Add Note Dropdown */}
        {showAddNote && (
          <div className="mb-4 border border-gray-300 rounded-md bg-white shadow-sm">
            <div className="px-3 py-1">
              <div className="relative mb-3">
                <div
                  className="w-full px-2 py-1 border border-gray-300 rounded text-sm appearance-none bg-white pr-8"
                  onClick={() => setShowAddNote(false)}
                >
                  <div>Select a step</div>
                </div>
                <ChevronDown
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={16}
                />
              </div>

              <div className="relative mb-3">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 px-2 py-1 border border-gray-300 rounded text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="space-y-1 mb-4">
                {filteredSteps.map((step) => {
                  if (!selectedItems.has(step.stepId))
                    return (
                      <div
                        key={step.stepId}
                        className={`flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer ${
                          selectedStep === step.stepId
                            ? "bg-blue-50 border border-blue-200"
                            : ""
                        }`}
                        onClick={() => {
                          addNewStepNote(step.stepId);
                          setShowAddNote(false);
                        }}
                      >
                        <span className="text-sm text-gray-900">
                          {step.name}
                        </span>
                      </div>
                    );
                })}
              </div>
              {/* setShowAddNote(false);
                    setSelectedStep("");
                    setSearchTerm(""); */}
            </div>
          </div>
        )}

        {/* Existing Step Notes */}
        {selectedItems.size === 0 ? (
          <p className="text-sm text-gray-500">
            Notes you add to individual steps will appear here.
          </p>
        ) : (
          <div className="space-y-2">
            {stepNotes.map((step) => {
              console.log(step.stepId, selectedItems.entries());
              if (selectedItems.has(step.stepId))
                return (
                  <div
                    key={step.stepId}
                    className="border border-gray-300 rounded overflow-hidden"
                  >
                    <div
                      className="flex items-center justify-between px-2 py-1 bg-gray-50 cursor-pointer hover:bg-gray-100"
                      onClick={() =>
                        setExpandedStep(
                          expandedStep === step.stepId ? null : step.stepId,
                        )
                      }
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center">
                          <ActivityIcon />
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          {getStepName(step.stepId)}
                        </span>
                      </div>
                      <ChevronDown
                        size={16}
                        className={`text-gray-400 transition-transform ${
                          expandedStep === step.stepId ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {expandedStep === step.stepId && (
                      <div className="border-t border-gray-200">
                        <div className="p-3 relative">
                          <textarea
                            className="w-full h-24 border-0 resize-none text-sm focus:ring-0 focus:outline-none bg-transparent"
                            placeholder="Add your note here..."
                            value={step.note}
                            onChange={(e) =>
                              handleStepNoteChange(step.stepId, e.target.value)
                            }
                            maxLength={500}
                          />
                          <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                            {step.note.length}/500 characters
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
            })}
          </div>
        )}

        {/* Collapsed step note view (matching image 1) */}
        {/* {stepNotes.length > 0 && expandedStep && (
          <div className="mt-4">
            <div
              className="flex items-center justify-between p-3 border border-gray-300 rounded-md bg-gray-50 cursor-pointer hover:bg-gray-100"
              onClick={() => setExpandedStep(stepNotes[0].stepId)}
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center">
                  📧
                </div>
                <span className="text-sm font-medium text-gray-900">
                  2. Select the event
                </span>
              </div>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}
