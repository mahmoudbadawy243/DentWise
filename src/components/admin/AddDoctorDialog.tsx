import { useCreateDoctor } from "@/hooks/use-doctors";
import { Gender } from "@prisma/client";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { formatPhoneNumber } from "@/lib/utils";
import { useParams } from "next/navigation";
import en from "@/dictionaries/en.json";
import ar from "@/dictionaries/ar.json";

interface AddDoctorDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

function AddDoctorDialog({ isOpen, onClose }: AddDoctorDialogProps) {

  const [newDoctor, setNewDoctor] = useState({
    name: "",
    email: "",
    phone: "",
    speciality: "",
    gender: "MALE" as Gender,
    isActive: true,
  });

  const createDoctorMutation = useCreateDoctor();
  const { locale } = useParams();
  const dict = (locale === 'ar' ? ar : en) as typeof en;

  const handlePhoneChange = (value: string) => {
    const formattedPhoneNumber = formatPhoneNumber(value);
    setNewDoctor({ ...newDoctor, phone: formattedPhoneNumber });
  };

  const handleSave = () => {
    createDoctorMutation.mutate({ ...newDoctor }, { onSuccess: handleClose });
  };

  const handleClose = () => {
    onClose();
    setNewDoctor({
      name: "",
      email: "",
      phone: "",
      speciality: "",
      gender: "MALE",
      isActive: true,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{dict.admin.dialogs.add.title}</DialogTitle>
          <DialogDescription>{dict.admin.dialogs.add.description}</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="new-name">{dict.admin.dialogs.add.labels.name}</Label>
              <Input
                id="new-name"
                value={newDoctor.name}
                onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
                placeholder={dict.admin.dialogs.add.placeholders.name}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-speciality">{dict.admin.dialogs.add.labels.speciality}</Label>
              <Input
                id="new-speciality"
                value={newDoctor.speciality}
                onChange={(e) => setNewDoctor({ ...newDoctor, speciality: e.target.value })}
                placeholder={dict.admin.dialogs.add.placeholders.speciality}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="new-email">{dict.admin.dialogs.add.labels.email}</Label>
            <Input
              id="new-email"
              type="email"
              value={newDoctor.email}
              onChange={(e) => setNewDoctor({ ...newDoctor, email: e.target.value })}
              placeholder={dict.admin.dialogs.add.placeholders.email}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-phone">{dict.admin.dialogs.add.labels.phone}</Label>
            <Input
              id="new-phone"
              value={newDoctor.phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
              placeholder={dict.admin.dialogs.add.placeholders.phone}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="new-gender">{dict.admin.dialogs.add.labels.gender}</Label>
              <Select
                value={newDoctor.gender || ""}
                onValueChange={(value) => setNewDoctor({ ...newDoctor, gender: value as Gender })}
              >
                <SelectTrigger>
                  <SelectValue placeholder={dict.admin.dialogs.add.labels.selectGender} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MALE">{dict.admin.doctorsManagement.genderMale}</SelectItem>
                  <SelectItem value="FEMALE">{dict.admin.doctorsManagement.genderFemale}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="new-status">{dict.admin.dialogs.add.labels.status}</Label>
              <Select
                value={newDoctor.isActive ? "active" : "inactive"}
                onValueChange={(value) =>
                  setNewDoctor({ ...newDoctor, isActive: value === "active" })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">{dict.admin.dialogs.add.labels.active}</SelectItem>
                  <SelectItem value="inactive">{dict.admin.dialogs.add.labels.inactive}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleClose}>
            {dict.admin.dialogs.add.buttons.cancel}
          </Button>

          <Button
            onClick={handleSave}
            className="bg-primary hover:bg-primary/90"
            disabled={
              !newDoctor.name ||
              !newDoctor.email ||
              !newDoctor.speciality ||
              createDoctorMutation.isPending
            }
          >
            {createDoctorMutation.isPending ? dict.admin.dialogs.add.buttons.submitting : dict.admin.dialogs.add.buttons.submit}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddDoctorDialog;
