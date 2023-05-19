from django.shortcuts import render, redirect
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.decorators import login_required
from celery import shared_task

##local imports
from .models import *
from .functions import *
from .tasks import *
import json
from django.http import HttpResponse
from django.shortcuts import get_object_or_404

from apps.users.models import CustomUser



@login_required
def simulate_error(request):
    raise Exception('This is a simulated error.')

@login_required
def store(request):
    return render(request, 'web/app/payments/store.html')


@login_required
def transcript(request, unique_id):
       
    return render(request, 'web/app/transcript.html', {
    })

@login_required
def dashboard_contact(request):
    user = request.user
    Customuser = CustomUser.objects.get(pk=user.pk)

    if request.method == 'POST':
        if 'stuur-een-bericht' in request.POST:
            name = request.POST.get('name')
            email = request.POST.get('email')
            message = request.POST.get('message')
            #new_Contact = Contact(name = name, email = email, message = message, subject = 'unkown')
            #new_Contact.save()
            return render(request, 'web/app/dashboard_contact.html', {'user': Customuser, 'bericht_ontvangen': True})


    return render(request, 'web/app/dashboard_contact.html',{
        'user':Customuser,
    })


@login_required
def download_transcript_view(request):
    if request.method == 'POST':
        uniqueId = request.POST.get('uniqueId')
           
        csv_string = "Start Time, End Time, Text\n"
        for script in transcript:
            csv_string += "{}, {}, {}\n".format(script['start'], script['end'], script['text'])
        
        response = HttpResponse(csv_string, content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename="transcript.csv"'
        
    return response



@login_required
def download_transcript_text_view(request):
    if request.method == 'POST':
        uniqueId = request.POST.get('uniqueId')
    
        csv_string = "Text\n"
        for script in transcript:
            csv_string += "{}\n".format(script['text'])
        
        response = HttpResponse(csv_string, content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename="transcript.csv"'
        
    return response


@login_required
def dashboard_meetings(request):
    return render(request, 'web/app/dashboard_meetings.html')

@login_required
def dashboard_statistics(request):
    return render(request, 'web/app/dashboard_statistics.html')



@login_required
def dashboard_chatbot(request):
    user = request.user
    return render(request, 'web/app/dashboard_chatbot.html', context={
    })




@login_required
def dashboard_new_meeting(request):
    user = request.user
    error_message = ''

    return render(request, 'web/app/dashboard_new_meeting.html', context={
    })





